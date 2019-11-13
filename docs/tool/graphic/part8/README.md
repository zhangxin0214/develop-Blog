---
title: Accordion手风琴
---
# Accordion手风琴
---
<xes-accordion></xes-accordion>

```js
<xes-accordion :tabShowStatus = "tabShowStatus" :pageNumber="index" name ="拖拽物" refName="option3">
    <xes-switch :allData="allData" :pageNumber="index"  conName="option"></xes-switch>
</xes-accordion>
<div class="game-inner" v-if="tabShowStatus[index].child.option3">
    <xes-switch :allData="allData" :pageNumber="index" name="开关" conName="option"></xes-switch>
    <xes-radio  :name="['图片','动画','序列图']"></xes-radio>
</div>
```
# Xes-accordion Events
事件名称|说明|回调参数
:--|:--|:--
change|绑定值变化时触发的事件|选中的元素的componentName

# Xes-accordion Attributes(*为必需)
参数           |说明                         |类型            |可选值|默认值
:---------     |:-------------------------- |:--             |:--   |:--
tabShowStatus *  |状态标记                     |bool            |—     |—
pageNumber *      |所在第几⼩题                 |number/string   |—	  |—
name *           |组件显示名称                 |string          |—	  |—
refName *        |.game-inner里v-if对应的key   |string          |—	  |—	

# Xes-accordion Slot
```js
<xes-accordion :tabShowStatus = "tabShowStatus" :pageNumber="index" name ="拖拽物" refName="option3">
    <xes-switch :allData="allData" :pageNumber="index"  conName="option"></xes-switch>
</xes-accordion>
```
# example
```js
<xes-accordion :tabShowStatus = "tabShowStatus" :pageNumber="index" name ="拖拽物" refName="option">
    <xes-switch :allData="allData" :pageNumber="index"  conName="option"></xes-switch>
</xes-accordion>

<div class="game-inner" v-if="tabShowStatus[index].child.option">
    //手风琴展开内容
</div>
```

