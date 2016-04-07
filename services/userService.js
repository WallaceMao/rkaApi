/**
 * Created by Wallace Mao on 16/3/16.
 */
'use strict'

var db = require('../db'),
    Promise = require('bluebird'),
    authUtil = require('../auth/authUtil');

/**
 * 获取用户相关的信息
 * @param params
 */
function provideGetUser(params){
    // TODO

    throw new RSQError({
        errcode: 10001,
        msg: "not implemented"
    });
}

/**
 * 创建用户
 * @param params
 */
function provideCreateUser(params){
    var accessKeyId = params.accessKeyId;

    return db.User.create({
        username: params.username,
        password: authUtil.signSHA512(params.password),
        realName: params.realName,
        phoneNumber: params.phoneNumber,
        fromClient: accessKeyId,
        outerId: params.outerId
    }).then(function(user){
            return Promise.resolve({
                errcode: 0,
                msg: "ok"
            });
        })
        .catch(function(err){
            throw err;
        });
}

/**
 * 更新用户信息
 * @param params
 */
function provideUpdateUser(params){

}

exports.provideGetUser = provideGetUser;
exports.provideCreateUser = provideCreateUser;
exports.provideUpdateUser = provideUpdateUser;