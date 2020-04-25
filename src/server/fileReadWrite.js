let fs = require('fs')
let data = ''
let  readStreamer = fs.createReadStream('input.txt');
readStreamer.setEncoding('UTF8')

readStreamer.on('data',(chunk)=>{
    data+=chunk
})

readStreamer.on('end',function(){
    console.log(data)
    console.log('读完了')
})
let data2="这是一串写入字符串"
let writeSteam = fs.createWriteStream('input2.txt')
writeSteam.write(data2,'UTF8')
// 管道流，其他操作均要删除不然不生效
// readStreamer.pipe(writeSteam)
writeSteam.end();
writeSteam.on('finish',()=>{
    console.log('写入成功')
})

writeSteam.on('error',()=>{
    throw new Error()
})
console.log('结束')
console.log(__filename)
console.log(__dirname)

fs.open('input3.txt','w+',(err,fd)=>{
    if(err){
        console.log(err)
    }
    console.log('文件打开成功')
})


