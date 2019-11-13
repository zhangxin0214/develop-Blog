<template>
    <div style="background:#343434;width:250px;height:40px;padding:10px;">
        <span style="color:#fff;font-size:14px;">拖拽物：</span>
        <el-select v-model="value" placeholder="拖拽物1" style="width:180px;">
        <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
        </el-option>
        </el-select>
    </div> 
</template>
<script>
  export default {
    data() {
      return {
        options: [{
          value: '选项1',
          label: '拖拽物1'
        }, {
          value: '选项2',
          label: '拖拽物2'
        }],
        value: ''
      }
    }
  }
</script>
<style>
.el-input__inner{
    background: #2E2E2E;
    color: #fff;
    border: none;
    border-radius: 0;
    border: 1px solid #6C6C6C;
}
</style>

