<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <el-form label-width="100px" >
       <el-form-item label="名称" prop="name">
         <el-input  v-model="user.name"/>
      </el-form-item>
       <el-form-item label="年龄" prop="age">
         <el-input v-model="user.age"/>
      </el-form-item>  
      <el-form-item label="描述" prop="desc">
         <el-input type="textarea" v-model="user.desc"/>
      </el-form-item>     
      <el-button @click="saveUser">保存</el-button>
      <el-button @click="cancal" type="reset">取消</el-button>
    </el-form>
    {{returnMsg}}
    {{user}}
  </div>
</template>

<script>
// const CryptoJS = require('crypto-js');  //引用AES源码js
 import service from '@/plugins/request'
import {Message} from 'element-ui'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      user:{
        name:'',
        age:undefined
      },
      returnMsg:''
    }
  },
  created() {
    this.getList()
  },
  methods:{
    cancal(){

    },
    saveUser(){
       service.post("/api/user/addUser",this.user).then(res => {
         debugger
         Message({
           type:'success',
           message:'操作成功',
           duration: 5 * 1000
         })
          this.returnMsg = res;
        }).catch(e=>{
          console.log(e)
        });
    },
    getList(){
      service.get('/api/user').then(res=>{
        this.returnMsg = res
      }).catch((e)=>{
        console.log(e)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
