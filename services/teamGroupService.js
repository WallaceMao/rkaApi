/**
 * Created by Wallace Mao on 16/3/16.
 */
'use strict'

/**
 * 分页获取team中的所有部门
 * @param.teamId teamId
 * @query.parentGroupId  如果该参数不存在，则分页返回所有group；若值为“root”，返回所有顶级部门。若值为groupId，则返回该id下的所有子部门
 * @query.offset 偏移量，默认为0
 * @query.max 一次获取的最大数量，默认为10
 * @return.total
 * @return.offset
 * @return.max
 * @return.data
 */
function provideListTeamGroup(params, query){

}

/**
 * 获取team中单个group的信息
 * @param.teamId teamId
 * @param.groupId groupId
 */
function provideGetTeamGroup(parmas){

}

/**
 * 在team中创建group
 * @param.teamId params
 * @param.body 包含创建group所需要的信息
 */
function provideCreateTeamGroup(params){

}

/**
 * 更新team中指定group
 * @param.teamId teamId
 * @param.groupId groupId
 * @param.body 包含更新group所需要的信息
 */
function provideUpdateTeamGroup(params){

}

/**
 * 删除team中的指定group
 * @param.teamId teamId
 * @param.groupId groupId
 */
function provideDeleteTeamGroup(params){

}

exports.provideListTeamGroup = provideListTeamGroup;
exports.provideGetTeamGroup = provideGetTeamGroup;
exports.provideCreateTeamGroup = provideCreateTeamGroup;
exports.provideUpdateTeamGroup = provideUpdateTeamGroup;
exports.provideDeleteTeamGroup = provideDeleteTeamGroup;
