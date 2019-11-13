---
title: Operate操作模块
---
# Operate操作模块
---
<xes-operate></xes-operate>

```js
<xes-operate 
    :allData="allData" 
    :pageNumber="index" 
    :name="拖拽物" 
    :filterKey="option">
    :attrConName=""
</xes-operate>
```
# Xes-operate Events
事件名称|说明|回调参数
:--|:--|:--
—|—|—

# Xes-operate Attributes(*为必需)
参数        |说明                         |类型            |可选值|默认值
:---------  |:-------------------------- |:--             |:--  |:--
allData *     |content.json配置⽂件整体数据 |json            |—     |—
filterKey *   |该组件所需数据源关键值        |string          |—     |—
pageNumber *  |所在第几⼩题                 |number/string   |—	  |—
name        |  组件显示名称                 |string          |—	  |—
attrConName |  组件插槽组件conName(用于插槽组件为图片的各种状态,如(hover,click))               |          |—	    |—	

# Xes-operate Slot
参数               |说明                         |类型            |可选值|默认值
:------------------        |:-------------------------- |:--             |:--  |:--
slotData.conName      |slot绑定数据的componentName |String            |—     |—
slotData.conData *   |slot绑定生成的一组数据       |object          |—     |—
slotData.index *  |由组件复制生成的数据index                |string   |—	  |—



example
```js
<xes-operate :allData="allData" :pageNumber="index" name="正确选项" filterKey="choice">
    <template slot-scope="slotData">
        <xes-upload-image :allData="allData" :resourceData="resourceData" :conData="slotData.conData" :conName="slotData.conName" ></xes-upload-image>
        <xes-input  :allData="allData" :conName="slotData.conName" :pageNumber ="index"  :conData="slotData.conData"
            name="X" value="x"></xes-input>
        <xes-input   :allData="allData" :conName="slotData.conName" :pageNumber ="index"  :conData="slotData.conData"
            name="Y" value="y"></xes-input>
        <xes-inputlock   :allData="allData" :resourceData="resourceData" :conName="slotData.conName"  :pageNumber ="index" :conData="slotData.conData"
        ></xes-inputlock>
            <xes-switch :allData="allData" :pageNumber="index" name="开关" :conName="slotData.conName" attr="show" @change="text($event,slotData.conName)"></xes-switch>
    </template>
</xes-operate>
```
