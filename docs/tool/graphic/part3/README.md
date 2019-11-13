---
title: radio单选框
---
# radio单选框
---
<xes-radio></xes-radio>

```js
<xes-radio  
:name="['图片','动画','序列图']"  
@change="text($event)">
</xes-radio>
```
# Xes-radio Events
事件名称|说明|回调参数
:--|:--|:--
change|绑定值变化时触发的事件|返回lable值

# Xes-radio Attributes
参数        |说明                         |类型            |可选值|默认值
:---------  |:-------------------------- |:--             |:--  |:--
name        |组件显示名称                 |Array           |—	    |—

# example

用radio控制图片、动画、精灵序列图的显隐切换
```js
<template>
    <div>
        <xes-accordion :tabShowStatus = "tabShowStatus" :pageNumber="index" name ="开始按钮" refName="startBtn">   
        </xes-accordion>
        <div class="game-inner" v-if="tabShowStatus[index].child.option1">
            <xes-radio  :name="['图片','动画','精灵序列图']"  @change="text($event)"></xes-radio>
            <xes-upload-image v-if="lable == 1" :allData="allData" :resourceData="resourceData"  name="图片" :conName="startBtnImg" :pageNumber="index"></xes-upload-image>
             <xes-upload-sprite v-if="lable == 2" :allData="allData" :resourceData="resourceData"  name="精灵序列图" :conName="startBtnSprite" :pageNumber="index"></xes-upload-sprite>
             <xes-upload-animate v-if="lable == 3" :allData="allData" :resourceData="resourceData"  name="动画" :conName="startBtnAnimate" :pageNumber="index"></xes-upload-animate>
        </div>
    </div>
</template>
import {CopyAndRender,DeleteEleByName,UploadAndRenderEle,RenderElementByIndex} from 'xes-tem-render'
export default {
     name: "EditGamePrivate",
     data() {
            return {
                lable:1
            }
        },
    methods: {
        text(e){
                console.log(e,"e");
                this.lable = e;
            }
    }
}
```

