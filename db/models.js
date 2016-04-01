/**
 * Created by Wallace Mao on 16/3/16.
 * @deprecated
 */
'use strict'

var db = require('./database');

var seqIns = db.getSequelizeInstance();
var Seq = db.Sequelize;

/**
 * 可以访问api的第三方应用
 * @type {*|{}|Model}
 */
var ApiClient = seqIns.define('ApiClient', {
    accessKeyId: {type: Seq.STRING, field: 'access_key_id'},
    accessKeySecret: {type: Seq.STRING, field: 'access_key_secret'},
    authRole: {type: Seq.STRING, field: 'auth_role'},
    note: {type: Seq.STRING, field: 'note'},
    status: {type: Seq.STRING, field: 'status'}
}, {
    createdAt: false,
    updatedAt: false,
    tableName: 'api_client'
});

/**
 * 第三方应用的用户，具有一般权限的第三方应用只能访问具有关联的用户
 * @type {*|{}|Model}
 */
var ApiClientUser = seqIns.define('ApiClientUser', {
    clientId: {type: Seq.INTEGER, field: 'client_id'},
    userId: {type: Seq.INTEGER, field: 'user_id'}
}, {
    createdAt: 'dateCreated',
    updatedAt: 'lastUpdated',
    tableName: 'api_client_user'
});

/**
 * 用户表
 * @type {*|{}|Model}
 */
var User = seqIns.define('User', {
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
    fromAgent: {type: Seq.STRING, field: 'from_agent'}
}, {
    createdAt: 'dateCreated',
    updatedAt: 'lastUpdated',
    tableName: 'user'
});

/**
 * 团队表
 * @type {*|{}|Model}
 */
var Team = seqIns.define('Team', {
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

/**
 * 团队组织机构
 * @type {*|{}|Model}
 */
var Department = seqIns.define('Department', {
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

/**
 * 用户与组织机构的关系
 * @type {*|{}|Model}
 */
var UserDept = seqIns.define('UserDept', {
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

exports.ApiClient = ApiClient;
exports.ApiClientUser = ApiClientUser;
exports.User = User;
exports.Team = Team;
exports.Department = Department;
exports.UserDept = UserDept;
