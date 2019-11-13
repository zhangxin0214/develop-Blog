---
title: 动画上传器
---
# 动画上传器
---
<xes-upload-animate></xes-upload-animate>

```js
<xes-upload-animate :allData="allData" :resourceData="resourceData" :pageNumber="index" conName="option">
    <template slot-scope="slotData">
        <xes-input :allData="allData" :conName="slotData.conName" :pageNumber ="slotData.index"
        name="X" value="x"></xes-input>
        <xes-input :allData="allData" :conName="slotData.conName" :pageNumber ="slotData.index"
        name="Y" value="y"></xes-input>
        <xes-input :allData="allData" :conName="slotData.conName" :pageNumber ="slotData.index"
        name="Scale" value="scale"></xes-input>
        <xes-switch :allData="allData" :pageNumber="index" :name="loop" :conName="option"></xes-switch>
    </template>
</xes-upload-animate>
```
# Xes-upload-animate Events
事件名称|说明|回调参数
:--|:--|:--
—|—|—

# Xes-upload-animate Attributes (*为必需)
参数        |说明                         |类型            |可选值|默认值
:---------  |:-------------------------- |:--             |:--  |:--
allData *     |content.json配置⽂件整体数据 |json            |—     |—
resourceData *|resource.json配置⽂件资源数据|json            |—     |—
pageNumber *  |所在第几⼩题                 |number/string   |—	    |—
name         |组件显示名称                 |string          |—	    |—
conName *     |组件属性名称                 |string          |—	    |—	
render *     |是否渲染到stage如(hover,click)                |boole|true	    |false