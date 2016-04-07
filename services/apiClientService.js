/**
 * Created by user on 16-4-7.
 */
"use strict"

var db = require('../db');

function findByAccessKeyIdAndEnabled(accessKeyId){

    return db.ApiClient.findOne({
        where: {
            accessKeyId: accessKeyId,
            status: 'enabled'
        }
    });

}

exports.findByAccessKeyIdAndEnabled = findByAccessKeyIdAndEnabled;