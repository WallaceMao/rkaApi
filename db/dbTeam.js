/**
 * Created by Wallace Mao on 16/3/16.
 */
'use strict'

var db = require('./database'),
    User = require('./dbUser').Model,
    Department = require('./dbDepartment').Model;

var seqIns = db.getSequelizeInstance();
var Seq = db.Sequelize;

/**
 * 团队表
 * @type {*|{}|Model}
 */
var Model = seqIns.define('Team', {
    dateCreated: {type: Seq.DATE, field: 'date_created'},
    lastUpdated: {type: Seq.DATE, field: 'last_updated'},
    address: {type: Seq.STRING, field: 'address'},
    area: {type: Seq.STRING, field: 'area'},
    contacts: {type: Seq.STRING, field: 'contacts'},
    createdBy: {type: Seq.INTEGER, field: 'created_by'},
    dian: {type: Seq.INTEGER, field: 'dian'},
    email: {type: Seq.STRING, field: 'email'},
    industry: {type: Seq.STRING, field: 'industry'},
    name: {type: Seq.STRING, field: 'name'},
    phoneNumber: {type: Seq.STRING, field: 'phone_number'}
}, {
    createdAt: 'dateCreated',
    updatedAt: 'lastUpdated',
    tableName: 'team'
});

exports.Model = Model;