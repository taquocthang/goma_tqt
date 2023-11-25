'use strict';
const moment = require('moment');
const path = require('path');
const fs = require('fs');
const helper = require('./helper');
const jwt = require('jsonwebtoken');
const {response} = require("express");
const axios = require('axios');
const fd = require('form-data');
let token = '';
require('dotenv').config({
    path: '../.env'
});
const SECRET_KEY = process.env.JWT_SECRET;

class Socket {

    constructor(socket) {
        this.io = socket;
    }


    socketEvents() {
        this.io.use(async (socket, next) => {
            try {
                token = socket.handshake.query.token; // get the token from the query string
                const decoded = jwt.verify(token, SECRET_KEY); // decode and verify the token
                socket.userId = decoded.userId; // add the userId to the socket object for later use
                next();
            } catch (error) {
                next(new Error('Unauthorized'));
            }
        });
        this.io.on('connection', (socket) => {
            console.log(socket,'socketsocketsocket')
            /**
             * get the user's Chat list
             */
            socket.on('chatList', async (userId) => {
                const result = await helper.getChatList(userId);
                this.io.to(socket.id).emit('chatListRes', {
                    userConnected: false,
                    chatList: result.chatlist
                });
                // socket.broadcast.emit('chatListRes', {
                //     userConnected: true,
                //     userId: userId,
                //     socket_id: socket.id
                // });
            });

            socket.on('joinFlight', async (data) => {
                socket.join(data);
            });
            /**
             * get the get messages
             */
            socket.on('getMessages', async (data, page, limit) => {
                console.log(page,limit);
                const result = await helper.getMessages(data.toFlightId);
                if (result === null) {
                    this.io.to(socket.id).emit('getMessagesResponse', {result: [], toFlightId: data.toFlightId});
                } else {
                    const startIndex = (page - 1) * limit;
                    const endIndex = startIndex + limit;
                    const paginatedMessages = result.slice(startIndex, endIndex);
                    this.io.to(socket.id).emit('getMessagesResponse', {result: paginatedMessages, toFlightId: data.toFlightId});
                }
            });


            /**
             * send the messages to the user
             */
            socket.on('addMessage', async (response) => {
                response.date = new moment().format("Y-MM-D");
                response.time = new moment().format("hh:mm A");
                this.insertMessage(response, socket);
                socket.emit('addMessageResponse', {
                    response: response,
                    toFlightId: response.toFlightId,
                });
                socket.to(response.toFlightId).emit('addMessageResponseToFlight', {
                    response: response,
                    toFlightId: response.toFlightId,
                });
            });

            socket.on('typing', function (data) {
                socket.to(data.socket_id).emit('typing', {typing: data.typing, to_socket_id: socket.id});
            });

            socket.on('upload-image', async (response) => {
                response.date = new moment().format("Y-MM-D");
                response.time = new moment().format("hh:mm A");
                let a = await this.insertMessage(response, socket);
                let url = await this.uploadMedia(a.insertId, response);
                if (typeof (url) == 'object') {
                    socket.emit('error-server', 'Error Server');
                    return;
                }
                response['filePath'] = url;
                socket.emit('addMessageResponse', {
                    response: response,
                    toFlightId: response.toFlightId,
                });
                socket.to(response.toFlightId).emit('addMessageResponseToFlight', {
                    response: response,
                    toFlightId: response.toFlightId,
                });
            });

            socket.on('disconnect', async () => {
                const isLoggedOut = await helper.logoutUser(socket.id);
                // socket.broadcast.emit('chatListRes', {
                //     userDisconnected: true,
                //     socket_id: socket.id
                // });
            });
        });
    }

    async uploadMedia(id, media) {
        let imageData = new Buffer.from(media.file).toString('base64');
        imageData = 'data:image/png;base64,' + imageData;
        let result = await axios.post('http://localhost:8000/api/upload_media', {
            'id': id,
            'image': imageData
        }, {
            headers: {
                "Accept": "application/json",
                "Authorization": "Bearer " + token,
            }
        })
            .then(function (response) {
                return response.data.url;
            })
            .catch(function (error) {
                return error;
            });
        return result;
    }

    async insertMessage(data, socket) {
        const sqlResult = await helper.insertMessages({
            fromUserId: data.fromUserId,
            toFlightId: data.toFlightId,
            message: data.message,
            date: data.date,
            time: data.time,
            type: data.type,
            fileFormat: data.fileFormat,
            filePath: data.filePath,
        });
        return sqlResult;
    }

    socketConfig() {
        this.io.use(async (socket, next) => {
            let userId = socket.request._query['id'];
            let userSocketId = socket.id;
            const response = await helper.addSocketId(userId, userSocketId);
            if (response && response !== null) {
                console.log(response,'userSocketIduserSocketIduserSocketIduserSocketId')
                next();
            } else {
                console.error(`Socket connection failed, for  user Id ${userId}.`);
            }
        });
        this.socketEvents();
    }
}

module.exports = Socket;
