/**
 * Created by Wallace Mao on 16/3/16.
 */
'use strict'

/**
 * 获取team信息
 * @param.teamId teamId
 */
function provideGetTeam(params){

}

/**
 * 更新team信息
 * @param.teamId teamId
 * @param.body 需要更新的team字段，只允许更改可以更改的字段，非法字段将会被忽略
 */
function provideCreateTeam(params){

}

/**
 * 更新Team
 * @param.teamId teamId
 * @param.body 创建的team的基本信息，body参数中缺少必要字段，将会返回错误。
 */
function provideUpdateTeam(params){

}


exports.provideGetTeam = provideGetTeam;
exports.provideCreateTeam = provideCreateTeam;
exports.provideUpdateTeam = provideUpdateTeam;
