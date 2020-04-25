const buf = Buffer.from('runoob', 'ascii');

// 输出 72756e6f6f62
console.log(buf.toString('hex'));

console.log(buf.toString('ascii'));
// 第二个参数为16进制
const buf1 = Buffer.alloc(10,101);
console.log(buf1)

const buf2 = Buffer.alloc(3,[1,2,3]);
console.log('buf2',buf2)

const buf3 = Buffer.allocUnsafe(10);
console.log(buf3)

// 创建一个包含 [0x1, 0x2, 0x3] 的 Buffer。
const buf4 = Buffer.from([1, 2, 3]);
console.log(buf4)

// 创建一个包含 UTF-8 字节 [0x74, 0xc3, 0xa9, 0x73, 0x74] 的 Buffer。
const buf5 = Buffer.from('qwqwqwqwwqqw','ascii');
console.log(buf5)
let json = JSON.stringify(buf5)
console.log('json',json)
let parseJson = JSON.parse(json)
let buf0 = Buffer.from(parseJson.data,)
console.log(buf0)
console.log(buf0.toString('utf8'))
console.log(Buffer.concat([buf4,buf5]))

const buf6 = Buffer.from('做');
console.log(buf6.length)

// 裁剪
var buffer_origin = Buffer.from('runoob');
var buffer_slice = buffer_origin.slice(0,2);
console.log("buffer slice content: "+buffer_slice.toString());
console.log("buffer origin content: "+buffer_origin.toString());
buffer_slice.write("wirte"); // Write buffer slice
console.log(buffer_slice.toString())
console.log(buffer_origin.toString())

let eventEmiter = new events.EventEmitter()
eventEmiter.on('connect',function(){
    console.log('随便注册一个事件')
})
eventEmiter.on('connect',function(){
    console.log('连接成功')
})
eventEmiter.emit('connect')
// 直接当作异常处理
// eventEmiter.emit('error')
console.log('执行完成，且触发了connect事件')