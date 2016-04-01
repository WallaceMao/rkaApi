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
 * 用户与组织机构的关系
 * @type {*|{}|Model}
 */
var Model = seqIns.define('UserDept', {
    dateCreated: {type: Seq.DATE, field: 'date_created'},
    lastUpdated: {type: Seq.DATE, field: 'last_updated'},
    departmentId: {type: Seq.INTEGER, field: 'department_id'},
    userId: {type: Seq.INTEGER, field: 'user_id'},
    manager: {type: Seq.BOOLEAN, field: 'manager'}
}, {
    createdAt: 'dateCreated',
    updatedAt: 'lastUpdated',
    tableName: 'user_dept'
});

exports.Model = Model;