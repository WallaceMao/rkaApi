/**
 * Created by Wallace Mao on 16/3/16.
 */
'use strict'

var db = require('./database'),
    Team = require('./dbTeam').Model,
    UserDept = require('./dbUserDept').Model;

var seqIns = db.getSequelizeInstance();
var Seq = db.Sequelize;

/**
 * 团队组织机构
 * @type {*|{}|Model}
 */
var Model = seqIns.define('Department', {
    dateCreated: {type: Seq.DATE, field: 'date_created'},
    lastUpdated: {type: Seq.DATE, field: 'last_updated'},
    email: {type: Seq.STRING, field: 'email'},
    level: {type: Seq.INTEGER, field: 'level'},
    orderNum: {type: Seq.INTEGER, field: 'order_num'},
    memo: {type: Seq.STRING, field: 'memo'},
    name: {type: Seq.STRING, field: 'name'},
    no: {type: Seq.STRING, field: 'no'},
    ownerName: {type: Seq.STRING, field: 'owner_name'},
    parentId: {type: Seq.INTEGER, field: 'parent_id'},
    path: {type: Seq.STRING, field: 'path'},
    phoneNumber: {type: Seq.STRING, field: 'phone_number'},
    teamId: {type: Seq.INTEGER, field: 'team_id'},
    validate: {type: Seq.BOOLEAN, field: 'validate'}
}, {
    createdAt: 'dateCreated',
    updatedAt: 'lastUpdated',
    tableName: 'department'
});

exports.Model = Model;