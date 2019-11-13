---
title: input比例锁定
---
# W & H比例锁定
---
<xes-inputlock></xes-inputlock>

```js
<xes-inputlock 
    :allData="allData" 
    :resourceData="resourceData" 
    :conName="slotData.conName"  
    :pageNumber ="index" 
    :conData="slotData.conData">
</xes-inputlock>
```
# Xes-inputlock Events
事件名称|说明|回调参数
:--|:--|:--
input|输入时触发的事件|

# Xes-inputlock Attributes (*为必需)
参数        |说明                         |类型            |可选值|默认值
:---------  |:-------------------------- |:--             |:--  |:--
allData *    |content.json配置⽂件整体数据 |json            |—     |—
pageNumber *  |所在第几⼩题                 |number/string   |—	    |—
name        |组件显示名称                 |string          |—	    |—
conName *     |组件属性名称                 |string          |—	    |—	
conData     |组件数据                     |          |—       |—