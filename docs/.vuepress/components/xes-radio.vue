<template>
  <div style="width:253px;background:#343434;padding:5px;">
    <el-radio-group v-model="radio">
        <el-radio :label="1">图片</el-radio>
        <el-radio :label="2">动画</el-radio>
        <el-radio :label="3">序列图</el-radio>
    </el-radio-group>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        radio: 1
      };
    }
  }
</script>
<style>
.el-checkbox__inner:hover {
  border-color: #77DC04;
}
.el-radio__input.is-checked .el-radio__inner {
  background: #77DC04;
  border-color: #77DC04;
}
.el-radio__input.is-checked + .el-radio__label {
  color: #fff;
}
.el-radio__inner:hover {
  color: #77DC04;
}
.el-radio{
  color: #fff;
}
</style>

