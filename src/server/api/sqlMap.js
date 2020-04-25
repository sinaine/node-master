// 数据库的映射文件

// sql语句
var sqlMap = {
    // 用户
    user: {
        getAll:'select * from user',
        add: 'insert into `user`(`id`, `name`,`age`, `desc`) values (?, ?, ?, ?)',
        addSql : 'INSERT INTO user(id, name,age, desc) VALUES(0,?,?,?,?)'

    }
}
module.exports = sqlMap;