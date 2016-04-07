var express = require('express');
var indexService = require('../services/indexService');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {
    //console.log('req.headers:' + JSON.stringify(req.headers.host));
//    throw new RSQError({errcode: 10020, msg: "internal error"});
    console.log('index:body:' + JSON.stringify(req.body));
    res.json(req.body);
//    indexService.provideGetIndex({})
//        .then(function(result){
//            res.json(result);
//        })
//        .catch(function(err){
//            next(err);
//        });
//    next(new RSQError({errcode: 10020, msg: "internal error"}));
});

module.exports = router;
