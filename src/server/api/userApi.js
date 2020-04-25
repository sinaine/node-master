// 用户操作api
const model = require('../db/db')
const express = require('express')
// 获取路由
var router = express.Router();
// 数据库
var mysql = require('mysql');

// 获取sql映射表
const $sql = require('./sqlMap')
// 连接mysql数据库
let connection = mysql.createConnection(model.mysql)
connection.connect()
var jsonWrite = (res,ret)=>{
    // 返回值为空的时候，操作失败
    if(typeof ret === 'undefined'){
        res.json({
            code:'500',
            msg:'操作失败'
        })
    }else{
        // 成功且返回json
        res.json(ret)
    }
}
// router.get('/', (req, res) => {
//     res.send('retrunJson');
// });
router.get('/',(req,res)=>{
    let sql = $sql.user.getAll
    connection.query(sql,(error,results)=>{
        if(error){
            console.log(error)
        }
        if(results){
            jsonWrite(res,results)
        }
    })
})
router.post('/addUser',(req,res)=>{
    let sql = $sql.user.add
    const param = req.body
    console.log(param)
    let id = new Date().getTime()
    connection.query(sql,[id,param.name,param.age,param.desc],function(error,results,fields){
        if(error){
            console.log(error)
        }
        if(results){
            jsonWrite(res,results)
        }

    })
    
})

module.exports = router;
