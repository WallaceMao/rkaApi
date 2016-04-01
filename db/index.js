/**
 * Created by Wallace Mao on 16/3/14.
 * @deprecated
 */
'use strict'

var ApiClient = require('./dbApiClient').Model;
var ApiClientUser = require('./dbApiClientUser').Model;
var Department = require('./dbDepartment').Model;
var Team = require('./dbTeam').Model;
var User = require('./dbUser').Model;
var UserDept = require('./dbUserDept').Model;

ApiClient.hasMany(ApiClientUser, {foreignKey: 'clientId', as: 'clientUsers'});

ApiClientUser.belongsTo(ApiClient, {foreignKey: 'clientId', as: 'client'});
ApiClientUser.belongsTo(User, {foreignKey: 'userId', as: 'user'});

Department.hasMany(Department, {foreignKey: 'parentId', as: 'children'});
Department.belongsTo(Department, {foreignKey: 'parentId', as: 'parent'});
Department.belongsTo(Team, {foreignKey: 'teamId', as: 'team'});
Department.hasMany(UserDept, {foreignKey: 'departmentId', as: 'userDeptLink'});

Team.belongsTo(User, {foreignKey: 'createdBy', as: 'creator'});
Team.hasMany(Department, {foreignKey: 'teamId', as: 'departments'});
Team.hasMany(User, {foreignKey: 'teamId', as: 'users'});

User.hasMany(ApiClientUser, {foreignKey: 'userId', as: 'userClients'});
User.hasMany(UserDept, {foreignKey: 'userId', as: 'userDeptLink'});
User.hasMany(Team, {foreignKey: 'createdBy', as: 'createdTeams'});
User.belongsTo(Team, {foreignKey: 'teamId', as: 'team'});

UserDept.belongsTo(Department, {foreignKey: 'departmentId', as: 'department'});
UserDept.belongsTo(User, {foreignKey: 'userId', as: 'user'});

