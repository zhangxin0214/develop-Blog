<template>
    <div style="width:253px;background:#343434;padding:5px;">
        <span class="xes-check-title" style="color:#fff;">正确答案:</span>
        <template v-for="(item,index) in datas">
            <el-checkbox v-model="item.checked" size="small" :key="index">
                拖拽物{{index+1}}
            </el-checkbox>
        </template>
        <slot></slot>
    </div>
</template>
<script>
export default {
    data(){
        return{
            datas:[
                {checked:true},
                {checked:false}
            ]
        }
    }
}
</script>
<style>
.el-checkbox__input.is-checked + .el-checkbox__label,.el-checkbox{
    color: #fff;
}
.el-checkbox__input.is-checked .el-checkbox__inner, .el-checkbox__input.is-indeterminate .el-checkbox__inner {
    background: #77DC04;
    border-color: #77DC04;
}
.el-checkbox__inner:hover {
    border-color: #77DC04;
}
</style>


