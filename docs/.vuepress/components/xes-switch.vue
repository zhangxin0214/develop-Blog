<template>
    <div style="width:253px;background:#343434;padding:5px;">
        <el-switch
                v-model="value1"
                active-color="#77DC04"
                inactive-color="#ff4949">
        </el-switch>
        <span style="color:#fff;font-size:14px;">开关</span>
    </div>
</template>
<script>
  export default {
    data() {
      return {
        value1: true
      }
    }
  };
</script>
