/**
 * Created by Wallace Mao on 16/3/14.
 */
'use strict'

var PassportStrategy = require('passport-strategy'),
    util = require('util'),
    authUtil = require('./authUtil'),
    db = require('../db');

function Strategy(options, verify){

    //if(typeof options == 'function'){
    //    verify = options;
    //    options = {};
    //}
    //
    //if(!verify){
    //    throw new TypeError('RSQ-RKA-Strategy requires a verify callback');
    //}
    //
    //this._signatureHeader = options.signatureHeader || 'Authorization';
    //this._extendedHeaderPrefix = options.extendedHeaderProfix || 'x-rka';

    PassportStrategy.call(this);

    this.name = 'RSQ-RKA';
    //this._verify = verify;

}

util.inherits(Strategy, PassportStrategy);

Strategy.prototype.authenticate = function(req, options) {
    options = options || {};
    var verb,contentMd5, contentType, date, rkaHeaders,
        resource, accessKeyId, accessKeySecret, authString,
        orgSignature;

    authString = req.get('Authorization');
    var part = authString.split(':');
    accessKeyId = part[0].split(' ')[1];
    orgSignature = part[1];

    verb = req.method.toUpperCase();
    contentMd5 = req.text ? authUtil.signMd5(req.text) : '';
    contentType = req.get('Content-Type');
    date = req.get('Date');
    rkaHeaders = authUtil.getRKAHeaderString(req.headers, 'x-rka');
    resource = req.originalUrl;

    var beforeString = verb + '\n'
        + contentMd5 + '\n'
        + contentType + '\n'
        + date + '\n'
        + rkaHeaders
        + resource;


    var self = this;

    db.accessClient.findByAccessKeyId(accessKeyId, function(err, client){
        accessKeySecret = client.accessKeySecret;

        console.log('beforeString:' + beforeString);

        var signature = authUtil.sign(beforeString, accessKeySecret);

        console.log('old signature:' + orgSignature);
        console.log('signature:' + signature);

        if(signature == orgSignature){
            self.success(client);
        }else{
            self.fail({msg: 'forbidden'}, 403);
        }
    });
}

module.exports = Strategy;