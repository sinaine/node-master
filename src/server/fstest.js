let fs = require('fs')
fs.readFile('input.txt',(err,res)=>{
    if(err){
        return Promise.reject('err')
    }
    console.log(res.toString())
    console.log('异步读取完成')
})

let data2 = fs.readFileSync('input.txt')
console.log(data2)
console.log('同步读取完成')

fs.stat('input2.txt',(err,stats)=>{
    if(err){
        console.error(err)
    }
    console.log(stats)
    console.log(stats.isFile())
    console.log(stats.isDirectory())
})

let writeData = '我就是一段要被写入文件的文字而已' 
fs.writeFile('input.txt',writeData,(err)=>{
    if(err){
        console.error(err)
    }
})

var buf = new Buffer.alloc(1024);

console.log("准备打开文件！");
fs.open('input.txt', 'rs+', function(err, fd) {
   if (err) {
       return console.error(err);
   }
   console.log("文件打开成功！");
   console.log("准备读取文件！");
//    文件的描述 r+ 对应的是5
   console.log('fd',fd)
   fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){
      if (err){
         console.log(err);
      }

      // 仅输出读取的字节
      if(bytes > 0){
         console.log(buf.slice(0, bytes).toString());
      }

      // 关闭文件
      fs.close(fd, function(err){
         if (err){
            console.log(err);
         } 
         console.log("文件关闭成功");
      });
   });
});


var dns = require('dns');

dns.lookup('www.baidu.com', function onLookup(err, address, family) {
   console.log('ip 地址:', address);
   dns.reverse(address, function (err, hostnames) {
   if (err) {
      console.log(err.stack);
   }

   console.log('反向解析 ' + address + ': ' + JSON.stringify(hostnames));
});  
});