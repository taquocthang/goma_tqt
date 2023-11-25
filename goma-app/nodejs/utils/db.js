'use strict';

const mysql = require('mysql');
const config = require('../config/dev.json');

class Db {
	constructor() {
		this.connection = mysql.createPool({
			connectionLimit: 100,
            host: config.dbConfig.host,
			port: config.dbConfig.port,
            user: config.dbConfig.user,
            password: config.dbConfig.password,
            database: config.dbConfig.database,
			debug: false
		});
	}
	query(sql, args) {
		return new Promise((resolve, reject) => {
			this.connection.query(sql, args, (err, rows) => {
				if (err)
					return reject(err);
				resolve(rows);
			});
		});
	}
	close() {
		return new Promise((resolve, reject) => {
			this.connection.end(err => {
				if (err)
					return reject(err);
				resolve();
			});
		});
	}
}
module.exports = new Db();
