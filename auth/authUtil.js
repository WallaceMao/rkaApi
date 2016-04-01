/**
 * Created by Wallace Mao on 16/3/14.
 */
'use strict'
var crypto = require('crypto');

exports.getRKAHeaderString = function(headers, prefix){
    var str = '';
    for(var key in headers){
        console.log('key:' + key + ',value:' + headers[key]);
        if(key.indexOf(prefix) == 0){
            str = str + key.toLowerCase() + ':' + headers[key] + '\n';
        }
    }

    return str;
}

exports.signMd5 = function(str){
    return crypto.createHash('md5').update(str).digest('base64');
}

exports.sign = function(beforeStr, key){
    return crypto.createHmac('sha1', key).update(beforeStr).digest('base64');
}