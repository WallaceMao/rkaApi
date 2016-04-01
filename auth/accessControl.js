/**
 * Created by Wallace Mao on 16/3/16.
 * 用于进行指定角色可访问资源的权限控制。权限控制按照“默认不可访问”的原则，未在可访问url中指定的资源不可访问
 */
'use strict'

var rules = {
    'partnerClient': [
        { can: 'GET /accounts' }
    ]
}

/**
 * 检查特定角色是否具有特定操作
 * @param role
 * @param resource
 * @param params
 * @returns {bluebird|exports|module.exports}
 */
function checkAsync(role, resource, params){

    //  如果role不存在，则默认是使用common角色
    if(!role){
        role = 'partnerClient';
    }

    var promise = new Promise(function(resolve, reject){

        var ruleList = rules[role];
        if(!ruleList){
            return reject(new Error('auth role' + role + ' not found!'));
        }
        var i = ruleList.length - 1;
        for(;;i--){
            var rule = ruleList[i];
            if( resource === rule.can){
                if(typeof rule.when === 'function'){
                    return rule.when(params)
                        .then(resolve)
                        .catch(reject);
                }else{
                    return resolve(true);
                }
            }
        }

        return reject(new Error('no rule matched found! role is:' + role + ', resource is:' + resource));
    });

    return promise;
}

exports.checkAsync = checkAsync;