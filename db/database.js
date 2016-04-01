/**
 * Created by Wallace Mao on 16/3/16.
 */
'use strict'

var Sequelize = require('sequelize'),
    config = require('../config');


var ds = config.dataSource,
    seq;

function getSequelizeInstance(){
    if(!seq){
        seq = new Sequelize(ds.database, ds.username, ds.password, {
            timezone: '+08:00',
            host: ds.host,
            port: ds.port,
            dialect: ds.dialect,
            logging: false,
            pool: {
                max: 5,
                min: 0,
                idle: 10000
            }
        });
    }
    return seq;
}

exports.getSequelizeInstance = getSequelizeInstance;
exports.Sequelize = Sequelize;
