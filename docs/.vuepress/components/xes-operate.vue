<template>
    <div>
       <div class="option-item" >
           <div class="game-icon">
                <span>&nbsp;拖拽物</span>
                <i class="game-title-icon el-icon-delete"></i>
                <i class="game-title-icon el-icon-tickets"></i>
                <i class="game-title-icon el-icon-plus"></i>
           </div>
           <!-- <slot :conName="" :conData ="" :index="" ></slot> -->
       </div>
    </div>
</template>
<style scoped>
.option-item {
    overflow: hidden;
    width: 300px;
    margin-top: 15px;
    background: #343434;
}
.option-item:nth-of-type(1){
    border: none;
}
.game-icon {
    height: 40px;
    line-height: 40px;
    color: #fff;
    float: left;
    width: 100%;
}
.game-title-icon {
    float: right;
    font-size: 18px;
    margin: 10px 4px;
    cursor: pointer;
}
</style>
