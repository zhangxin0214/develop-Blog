<template>
    <div style="width:260px;background:#343434;padding:5px;">
        <el-input placeholder="请输入内容"  v-model="input" style="width:200px">
            <template slot="prepend">X：</template>
        </el-input>
    </div>
</template>
<script>
export default {
     data() {
        return {
            input: ''
        }
  }
}
</script>
<style>
.el-input-group__append, .el-input-group__prepend {
    border: none !important;
    background: #383838 !important;
    color: #fff !important;
    font-size: 14px !important;
    padding: 0 10px;
}
.el-input__inner {
    background: #2E2E2E !important;
    color: #fff !important;
    border: none !important;
    border-radius: 0!important;
    border: 1px solid #6C6C6C!important;
}
</style>


