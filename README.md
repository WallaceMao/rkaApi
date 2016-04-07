# rkaApi
rishiqing key access api for third party application

## users

### create new user

**url:** POST /v1/users

**params:**

body:

* username: 登录用户名
* password: 登录密码（明文）
* realName: 真实姓名
* phoneNumber: 手机号
* avatarurl: 头像地址

**return json:**


    {
        errcode: 0,
        msg: "ok"
    }

### get user info

只能获取有访问权限的用户的信息

**url:** GET /v1/users/:userId

**params:**

query:
* userId: 获取用户的id

**return json:**


    {
        errcode: 0,
        msg: "ok",
        data: {
            realName: "Wallace"
        }
    }


### update user info

只能更新具有修改权限的用户

**url:** PUT /v1/users/:userId

**params:**

query:

* userId: 获取用户的id

body:

* password: 登录密码（明文）
* realName: 真实姓名
* phoneNumber: 手机号
* avatarurl: 头像地址

**return json:**


    {
        errcode: 0,
        msg: "ok"
    }

## teams

# errcode

return code of each request

* 0: 返回成功
* 10001: 方法尚未实现
* 10002: 权限验证失败
* 19999: 未知错误