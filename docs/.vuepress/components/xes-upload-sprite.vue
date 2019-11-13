<template>
    <div>
        <div class="game-icon">
            <span></span>
        </div>
        <div class="upload">
            <span class="file-title">精灵序列：</span>
            <div class="animate-box">
                <span v-text=""></span>
            </div>
            <div class="upload-btn">
                <div class="upload-btn-file">
                    <span>更改文件</span>
                    <input type="file" multiple="multiple">
                </div>
            </div>

            <!-- <xes-input :name="X" :value="x" class="input-x"></xes-input>
            <xes-input :name="Y" :value="y"></xes-input>
            <xes-input :name="Scale" :value="scale"></xes-input> -->
            <span class="prepend">X：</span><input class="input-x"/>
            <span class="prepend">Y：</span><input class="input-x"/>
            <span class="prepend">Scale：</span><input class="input-x" style="width:75px;"/>
            <el-switch v-model="value1" active-color="#77DC04" inactive-color="#ff4949" style="margin-left:10px;"></el-switch>
            <span class="prepend">loop</span>
        </div>
        <!-- slot预留插槽 -->
        <!-- <slot :conName="componentData.componentName" :index="pageNumber" ></slot> -->
        
    </div>
</template>
<script>
export default {
    data(){
        return{
            value1:true
        }
    }
}
</script>
<style scoped>
.input-x{
    background: #2E2E2E !important;
    color: #fff !important;
    border: none !important;
    border-radius: 0!important;
    border: 1px solid #6C6C6C!important;
    height: 25px;
    width: 100px;
    margin-top:10px; 
    font-size: 20px;
}
.el-input-group {
    margin-top: 15px;
    width: 50%;
    float: left;
}
.el-input-group__append, .prepend {
    border: none !important;
    background: #383838 !important;
    color: #fff !important;
    font-size: 14px !important;
    padding: 0 10px;
}

.upload {
    background:#343434;
    width: 20rem;
    height: 8rem;
    margin: 0;
    overflow: hidden;
    padding:5px;
}
.file-title{
    float: left;
    width: 28%;
    color: #fff;
    height: 32px;
    line-height: 32px;
}
.animate-box {
    width: 42%;
    float: left;
    height: 32px;
    box-sizing: border-box;
    text-align: left;
    line-height: 32px;
    padding: 0 5px;
    font-size: 14px;
    color: #999;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}
.upload-btn {
    float: right;
    width: 30%;
}
.upload-btn-file {
    position: relative;
    width: 80px;
    height: 32px;
    line-height: 30px;
    text-align: center;
    border-radius: 5px;
    background: #666666;
    color: #fff;
    float: right;
}
.upload-btn-file span{
    font-size: 14px;
}
.upload-btn-file input{
    width: 80px;
    height: 30px;
    opacity: 0;
    position: absolute;
    left: 0;
    top: 0;
    cursor: pointer;
}
</style>
