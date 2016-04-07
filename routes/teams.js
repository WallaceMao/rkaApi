var teamService = require('../services/teamService');
var teamMemberService = require('../services/teamMemberService');
var teamGroupService = require('../services/teamGroupService');
var express = require('express');
var router = express.Router();

/**
 * 移除team中的指定group
 */
router.delete('/:teamId/groups/:groupId', function(req, res, next) {
    var params = req.params;
    params.client = req.client;
    teamGroupService.provideDeleteTeamGroup(params)
        .then(function(json){
            res.json(json);
        })
        .catch(function(err){
            next(err);
        });
});

router.put('/:teamId/groups/:groupId', function(req, res, next){
    var params = req.params;
    params.client = req.client;
    params.body = req.body;
    teamGroupService.provideUpdateTeamGroup(params)
        .then(function(json){
            res.json(json);
        })
        .catch(function(err){
            next(err);
        });
});

/**
 * 获取team中指定id的group基本信息
 */
router.get('/:teamId/groups/:groupId', function(req, res, next){
    var params = req.params;
    params.client = req.client;
    teamGroupService.provideGetTeamGroup(params)
        .then(function(json){
            res.json(json);
        })
        .catch(function(err){
            next(err);
        });
});

/**
 * 在team中新增group，新增加的group信息包含在body中
 */
router.post('/:teamId/groups', function(req, res, next){
    var params = req.params;
    params.client = req.client;
    params.body = req.body;
    teamGroupService.provideCreateTeamGroup(params, req.query)
        .then(function(json){
            res.json(json);
        })
        .catch(function(err){
            next(err);
        });
});

/**
 * 获取team中，满足指定条件的group列表。
 * query.parentGroupId  如果该参数不存在，则分页返回所有group；若值为“root”，返回所有顶级部门。若值为groupId，则返回该id下的所有子部门
 * return  分页返回查询到的数据
 */
router.get('/:teamId/groups', function(req, res, next){
    var params = req.params;
    params.client = req.client;
    teamGroupService.provideListTeamGroup(params, req.query)
        .then(function(json){
            res.json(json);
        })
        .catch(function(err){
            next(err);
        });
});

/**
 * 从小组中移除user
 */
router.delete('/:teamId/members/:userId', function(req, res, next){
    var params = req.params;
    params.client = req.client;
    teamMemberService.provideRemoveMember(params)
        .then(function(json){
            res.json(json);
        })
        .catch(function(err){
            next(err);
        });
});

/**
 * 将user添加到team中
 */
router.post('/:teamId/members/:userId', function(req, res, next){
    var params = req.params;
    params.client = req.client;
    teamMemberService.provideAddTeamMember(params)
        .then(function(json){
            res.json(json);
        })
        .catch(function(err){
            next(err);
        });
});

/**
 * 将user批量添加到team中
 * body.strUserIds  由userId组成的以英文逗号分隔字符串。一次最大批量为10
 */
router.post('/:teamId/members', function(req, res, next){
    var params = req.params;
    params.client = req.client;
    params.body = req.body;
    teamMemberService.provideAddTeamMember(params)
        .then(function(json){
            res.json(json);
        })
        .catch(function(err){
            next(err);
        });
});

/**
 * 获取team中所有用户的列表，分页显示
 */
router.get('/:teamId/members', function(req, res, next){
    var params = req.params;
    params.client = req.client;
    teamMemberService.provideListTeamMember(params, req.query)
        .then(function(json){
            res.json(json);
        })
        .catch(function(err){
            next(err);
        });
});

/**
 * 更新team信息
 */
router.put('/:teamId', function(req, res, next){
    var params = req.params;
    params.client = req.client;
    params.body = req.body;
    teamService.provideUpdateTeam(params)
        .then(function(json){
            res.json(json);
        })
        .catch(function(err){
            next(err);
        });
});

/**
 * 获取team信息
 */
router.get('/:teamId', function(req, res, next){
    var params = req.params;
    params.client = req.client;
    teamService.provideGetTeam(params)
        .then(function(json){
            res.json(json);
        })
        .catch(function(err){
            next(err);
        });
});

/**
 * 创建team
 */
router.post('/', function(req, res, next){
    var params = {};
    params.client = req.client;
    params.body = req.body;
    teamService.provideCreateTeam(params)
        .then(function(json){
            res.json(json);
        })
        .catch(function(err){
            next(err);
        });
});

module.exports = router;
