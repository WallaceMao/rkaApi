var userService = require('../services/userService');
var express = require('express');
var router = express.Router();

/**
 * 创建新用户
 */
router.post('/', function(req, res, next){
    var params = {};
    params.client = req.client;
    params.body = req.body;
    userService.provideCreateUser(params)
        .then(function(json){
            res.json(json);
        })
        .catch(function(err){
            winston.error(err.stack);
            next(err);
        });
});

/**
 * 根据userId获取user信息
 */
router.get('/:userId', function(req, res, next) {
    var params = req.params;
    params.client = req.client;
    userService.provideGetUser(params)
        .then(function(json){
            res.json(json);
        })
        .catch(function(err){
            winston.error(err.stack);
            next(err);
        });
});

/**
 * 更新id为userId的user信息
 */
router.put('/:userId', function(req, res, next){
    var params = req.params;
    params.client = req.client;
    params.body = req.body;
    userService.provideUpdateUser(params)
        .then(function(json){
            res.json(json);
        })
        .catch(function(err){
            winston.error(err.stack);
            next(err);
        });
});

module.exports = router;
