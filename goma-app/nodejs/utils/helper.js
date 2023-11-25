'user strict';

const DB = require('./db');
const path = require('path');
const fs = require('fs');

class Helper {

    constructor(app) {
        this.db = DB;
    }

    async addSocketId(userId, userSocketId) {
        try {
            return await this.db.query(`UPDATE users
                                        SET socket_id = ?,
                                            online= ?
                                        WHERE id = ?`, [userSocketId, 'Y', userId]);
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    async logoutUser(userSocketId) {
        return await this.db.query(`UPDATE users
                                    SET socket_id = ?,
                                        online= ?
                                    WHERE socket_id = ?`, ['', 'N', userSocketId]);
    }

    getChatList(userId) {
        try {
            return Promise.all([
                this.db.query(`SELECT *
                               FROM flights
                               WHERE id in (SELECT flight_id FROM flights_users WHERE user_id = ?);`, [userId])
            ]).then((response) => {
                return {
                    chatlist: response[0]
                };
            }).catch((error) => {
                console.warn(error);
                return (null);
            });
        } catch (error) {
            console.warn(error);
            return null;
        }
    }

    async insertMessages(params) {
        try {
            return await this.db.query("INSERT INTO messages (`type`, `file_format`, `file_path`, `from_user_id`,`to_flight_id`,`message`, `date`, `time`) values (?,?,?,?,?,?,?,?)", [params.type, params.fileFormat, params.filePath, params.fromUserId, params.toFlightId, params.message, params.date, params.time]
            );
        } catch (error) {
            console.warn(error);
            return null;
        }
    }

    async getMessages(toFlightId) {
        try {
            return await this.db.query(
                `SELECT messages.id,
                        messages.message,
                        messages.from_user_id,
                        messages.to_flight_id,
                        messages.date,
                        messages.time,
                        messages.type,
                        messages.file_path,
                        users.id,
                        users.full_name
                 FROM messages
                          INNER JOIN users
                                     ON users.id = messages.from_user_id AND to_flight_id = ?
                 ORDER BY messages.id
                     ASC;`,
                [toFlightId]
            );
        } catch (error) {
            console.warn(error);
            return null;
        }
    }

    async getMessageMedia(id) {
        try {
            return await this.db.query(
                `SELECT messages.id,
                        messages.message,
                        messages.from_user_id,
                        messages.to_flight_id,
                        messages.date,
                        messages.time,
                        users.id,
                        users.full_name
                 FROM messages
                 WHERE id = ?`,
                [id]
            );
        } catch (error) {
            console.warn(error);
            return null;
        }
    }

    async mkdirSyncRecursive(directory) {
        var dir = directory.replace(/\/$/, '').split('/');
        for (var i = 1; i <= dir.length; i++) {
            var segment = path.basename('uploads') + "/" + dir.slice(0, i).join('/');
            !fs.existsSync(segment) ? fs.mkdirSync(segment) : null;
        }
    }
}

module.exports = new Helper();
