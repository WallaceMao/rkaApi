/**
 * Created by Wallace Mao on 16/3/16.
 */
'use strict'

var db = require('./database');

var seqIns = db.getSequelizeInstance();
var Seq = db.Sequelize;

/**
 * 可以访问api的第三方应用
 * @type {*|{}|Model}
 */
var Model = seqIns.define('ApiClient', {
    accessKeyId: {type: Seq.STRING, field: 'access_key_id'},
    accessKeySecret: {type: Seq.STRING, field: 'access_key_secret'},
    authRole: {type: Seq.STRING, field: 'auth_role', defaultValue: 'apiApp'},
    note: {type: Seq.STRING, field: 'note'},
    status: {type: Seq.STRING, field: 'status'}
}, {
    createdAt: false,
    updatedAt: false,
    tableName: 'api_client'
});

exports.Model = Model;
