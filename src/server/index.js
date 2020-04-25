const  express = require('express')
const app = express()
const userApi = require('./api/userApi');
const bodyParser = require('body-parser');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//注册api路由
app.use('/api/user', userApi);

// app.use(express.static(path.join(__dirname, 'views')))
app.get('/', function (req, res) {
  res.send('访问成功')
})


app.listen(8080,()=>{
    console.log('ok')
})