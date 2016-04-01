/**
 * Created by Wallace Mao on 16/3/16.
 */
'use strict'

var db = require('./database');

var seqIns = db.getSequelizeInstance();
var Seq = db.Sequelize;

/**
 * 第三方应用的用户，具有一般权限的第三方应用只能访问具有关联的用户
 * @type {*|{}|Model}
 */
var Model = seqIns.define('ApiClientUser', {
    clientId: {type: Seq.INTEGER, field: 'client_id'},
    userId: {type: Seq.INTEGER, field: 'user_id'}
}, {
    createdAt: 'dateCreated',
    updatedAt: 'lastUpdated',
    tableName: 'api_client_user'
});

exports.Model = Model;