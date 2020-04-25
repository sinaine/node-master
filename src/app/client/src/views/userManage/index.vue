<template>
    <div>{{returnMsg}}
      <a>userManage页面</a>
      </div>    
</template>
<script>
import service from '@/plugins/request'

export default {
  name: "UserManage",
  data() {
    return {
      returnMsg: ""
    };
  },
  mounted() {
    service.get("/api/users").then(res => {
      this.returnMsg = res;
    });
  }
};
</script>

