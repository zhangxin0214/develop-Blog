---
title: switch开关
---
# switch开关
---
<xes-switch></xes-switch>

```js
<xes-switch 
    :allData="allData" 
    :pageNumber="index" 
    :name="开关" 
    :conName="option"
    attr="show"
    @change="text($event)">
</xes-switch>
```
# Xes-switch Events
事件名称|说明|回调参数
:--|:--|:--
change|绑定值变化时触发的事件|返回ture/false

# Xes-switch Attributes(*为必需)
参数        |说明                         |类型            |可选值|默认值
:---------  |:-------------------------- |:--             |:--  |:--
allData *    |content.json配置⽂件整体数据 |json            |—     |—
pageNumber *  |所在第几⼩题                 |number/string   |—	    |—
name        |组件显示名称                 |string          |—	    |—
conName     |组件属性名称                 |string          |—	    |—	
attr *       |自定义key                   |string          |—       |—