---
title: input输入框
---
# input输入框
---
<xes-input></xes-input>

```js
<xes-input 
    :allData="allData" 
    :conName="slotData.conName" 
    :pageNumber ="index"  
    :conData="slotData.conData"
    :name="X" 
    :value="x">
</xes-input>
```
# Xes-input Events
事件名称|说明|回调参数
:--|:--|:--
input|输入时触发的事件|所输入value值

# Xes-input Attributes(*为必需)
参数        |说明                         |类型            |可选值|默认值
:---------  |:-------------------------- |:--             |:--  |:--
allData *    |content.json配置⽂件整体数据 |json            |—     |—
pageNumber *  |所在第几⼩题                 |number/string   |—	    |—
name        |组件显示名称                 |string          |—	    |—
conName *     |组件属性名称                 |string          |—	    |—	
conData     |组件数据                     |          |—       |—
value *     |组件返回值target对象Key值                     |||