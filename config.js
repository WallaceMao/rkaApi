/**
 * Created by Wallace Mao on 16/3/16.
 */
'use strict'

var config = {};

config.dataSource = {
    database: 'ttm2',
    username: 'root',
    password: 'root',
    host: 'localhost',
    port: '3306',
    dialect: 'mysql'
};

config.log = {
    level: 'warn'
}

module.exports = config;