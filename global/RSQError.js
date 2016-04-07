/**
 * Created by Wallace Mao on 16-4-7.
 * 通用的错误处理类
 */

function RSQError(prop, err){
    var prop = prop || {};
    var err = err || {};

    //  错误的http状态码，该状态码将最终返回给用户
    this.status = prop.status || 500;

    //  内部错误标识
    this.errcode = prop.errcode || 19999;

    //  内部错误描述
    this.message = this.msg = prop.msg || err.message || 'unknown error';

    this.stack = err.stack || (new Error(this.errcode + ' ' + this.msg)).stack;
}

exports = module.exports = RSQError;

