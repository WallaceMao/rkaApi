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
    version: {type: Seq.INTEGER, field: 'version', defaultValue: 0},
    accountExpired: {type: Seq.BOOLEAN, field: 'account_expired', defaultValue: false},
    accountLocked: {type: Seq.BOOLEAN, field: 'account_locked', defaultValue: false},
    passwordExpired: {type: Seq.BOOLEAN, field: 'password_expired', defaultValue: false},
    username: {type: Seq.STRING, field: 'username'},
    password: {type: Seq.STRING, field: 'password'},
    realName: {type: Seq.STRING, field: 'real_name'},
    phoneNumber: {type: Seq.STRING, field: 'phone_number'},
    avatarurl: {type: Seq.STRING, field: 'avatarurl'},
    enabled: {type: Seq.BOOLEAN, field: 'enabled', defaultValue: true},
    lastLoginDate: {type: Seq.DATE, field: 'last_login_date'},
    loginCount: {type: Seq.INTEGER, field: 'login_count', defaultValue: 0},
    'class': {type: Seq.STRING, field: 'class', defaultValue: 'com.taskmanagement.organization.CommonUser'},
    dian: {type: Seq.INTEGER, field: 'dian'},
    fromAgent: {type: Seq.STRING, field: 'from_agent'},
    teamId: {type: Seq.INTEGER, field: 'team_id'},
    outerId: {type: Seq.STRING, field: 'outer_id'},
    fromClient: {type: Seq.STRING, field: 'from_client'}
}, {
    createdAt: 'dateCreated',
    updatedAt: false,
    tableName: 'user'
});

exports.Model = Model;