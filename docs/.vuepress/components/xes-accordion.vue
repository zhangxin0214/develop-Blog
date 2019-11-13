<template>
    <div>
        <div class="game-title">
            <div style="float:left;">
                <i :class="tabShowStatus?'el-icon-arrow-down':'el-icon-arrow-right'"
                @click="tabShow()"></i>
                <span @click="tabShow()">
                    拖拽物
                </span>
            </div>
            <div style="float:right;width:80%;margin-right:-150px;">
               <el-switch v-model="value1" active-color="#77DC04" inactive-color="#ff4949"></el-switch>
            </div>
        </div>
        <div class="game-inner" v-if="tabShowStatus">
            <xes-switch :allData="allData" :pageNumber="index" name="开关" conName="option"></xes-switch>
            <xes-radio  :name="['动画',]"></xes-radio>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            value1:true,
            tabShowStatus:false
        }
    },
    methods:{
        tabShow(){
            this.tabShowStatus = !this.tabShowStatus;
        }
    }
}
</script>
<style scoped>
.game-title {
    width: 240px;
    overflow: hidden;
    height: 40px;
    line-height: 40px;
    background: #555555;
    border-bottom: 1px solid #313131;
    padding-left: 15px;
    color: #fff;
    padding-right: 8px;
}
.game-title i,.game-title span {
     cursor: pointer;
}
/*.game-inner{
    width: 263px;
    overflow: hidden;
    background: #313131;
} */
</style>

