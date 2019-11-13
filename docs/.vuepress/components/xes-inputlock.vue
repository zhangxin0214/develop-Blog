<template>
    <div style="width:260px;background:#343434;padding:5px;">
        <el-input placeholder="" style="width:100px;float:left;margin-top:3px;">
            <template slot="prepend">W：</template>
        </el-input>
        <div style="" class="image-lock">
            <img :src="$withBase('/images/lock_on.png')" alt="" @click="setImageLock()"  v-if="lock">
            <img :src="$withBase('/images/lock_off.png')" alt="" @click="setImageLock()" v-if="!lock">
        </div>
        <el-input placeholder="" style="width:100px;">
            <template slot="prepend">H：</template>
        </el-input>
    </div>
</template>
<script>
export default {
    data(){
        return{
            lock:false,
        }
    },
    methods:{
        setImageLock(){
            this.lock = !this.lock;
        }
    }
}
</script>
<style>
.image-lock{
    float: left;
    text-align: center;
    width: 20%;
    height: 28px;
    margin-top: 15px;
    line-height: 30px;
}
.image-lock img{
    height: 13px;
    float: left;
    margin-left:10px;
    cursor: pointer; 
}
.el-input-group__append, .el-input-group__prepend {
    border: none;
    background: #383838;
    color: #fff;
    font-size: 14px;
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


