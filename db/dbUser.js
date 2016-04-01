/**
 * Created by Wallace Mao on 16/3/16.
 */
'use strict'

var db = require('./database'),
    ApiClientUser = require('./dbApiClientUser').Model,
    UserDept = require('./dbUserDept').Model,
    Team = require('./dbTeam').Model;

var seqIns = db.getSequelizeInstance();
var Seq = db.Sequelize;

/**
 * 用户表
 * @type {*|{}|Model}
 */
var Model = seqIns.define('User', {
    dateCreated: {type: Seq.DATE, field: 'date_created'},
    lastUpdated: {type: Seq.DATE, field: 'last_updated'},
    username: {type: Seq.STRING, field: 'username'},
    password: {type: Seq.STRING, field: 'password'},
    realName: {type: Seq.STRING, field: 'real_name'},
    phoneNumber: {type: Seq.STRING, field: 'phone_number'},
    avatarurl: {type: Seq.STRING, field: 'avatarurl'},
    enabled: {type: Seq.BOOLEAN, field: 'enabled'},
    lastLoginDate: {type: Seq.DATE, field: 'last_login_date'},
    loginCount: {type: Seq.INTEGER, field: 'login_count'},
    'class': {type: Seq.STRING, field: 'class'},
    dian: {type: Seq.INTEGER, field: 'dian'},
    fromAgent: {type: Seq.STRING, field: 'from_agent'},
    teamId: {type: Seq.INTEGER, field: 'team_id'}
}, {
    createdAt: 'dateCreated',
    updatedAt: 'lastUpdated',
    tableName: 'user'
});

exports.Model = Model;