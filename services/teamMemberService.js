/**
 * Created by Wallace Mao on 16/3/16.
 */
'use strict'

/**
 * 分页列表的形式获取team中的成员
 * @param.teamId teamId
 * @query.offset 偏移量，默认为0
 * @query.max 一次获取的最大数量，默认为10
 * @return.total
 * @return.offset
 * @return.max
 * @return.data
 */
function provideListTeamMember(params, query){

}

/**
 * 将用户移出团队
 * @param.teamId teamId
 * @param.userId userId
 */
function provideRemoveMember(params){

}

/**
 * 将用户添加到团队，支持单个添加和批量添加
 * @param.teamId teamId
 * @param.userId （可选）用户Id 单个添加时必选
 * @param.body.strUserIds （可选）用户的id组成的字符串，以英文逗号分隔 批量添加字段，最大批量10
 */
function provideAddTeamMember(params){

}


exports.provideListTeamMember = provideListTeamMember;
exports.provideAddTeamMember = provideAddTeamMember;
exports.provideRemoveMember = provideRemoveMember;
