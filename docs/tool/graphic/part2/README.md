---
title: checkbox多选框
---
# checkbox多选框
---
<xes-checkbox></xes-checkbox>

```js
<xes-checkbox
    :allData="allData" 
    :pageNumber="index" 
    name="拖拽物" 
    filterKey="option"
    :targetEle="target"
    title="正确选项"
    @checkboxChange="text($event)">
</xes-checkbox>
```
# Xes-checkbox Events
事件名称|说明|回调参数
:--|:--|:--
checkboxChange|绑定值变化时触发的事件|选中的元素的componentName/ture/false

# Xes-checkbox Attributes
参数        |说明                         |类型            |可选值|默认值
:---------  |:-------------------------- |:--             |:--  |:--
allData     |content.json配置⽂件整体数据   |json            |—     |—
filterKey |该组件所需数据源关键值        |string          |—	   |—	
targetEle |该组件返回值绑定对象     |string          |—	   |—	
pageNumber  |所在第几⼩题                 |number   |—	    |—
name        |复选框名称 (例:拖拽物)                  |string          |—	    |—
title       |组件名称(例:正确答案)                     |string          |—	    |—	

# example
1.filterKey = targetEle(经典题型多选)
```js
<xes-checkbox 
        :allData="allData" 
        :pageNumber="index" 
        name="选项" 
        filterKey="choice"
        targetEle = "choice"
        title="正确选项"
        @change="checkboxChange($event)">
</xes-checkbox>
<xes-operate :allData="allData" :pageNumber="index" name="选项" filterKey="choice">
    <template slot-scope="slotData">
        <xes-upload-image :allData="allData" :resourceData="resourceData" :conData="slotData.conData" :conName="slotData.conName" ></xes-upload-image>
        <xes-input :allData="allData" :conName="slotData.conName" :pageNumber ="index"  :conData="slotData.conData"
            name="X" value="x"></xes-input>
        <xes-input :allData="allData" :conName="slotData.conName" :pageNumber ="index"  :conData="slotData.conData"
            name="Y" value="y"></xes-input>
        <xes-inputlock :allData="allData" :resourceData="resourceData" :conName="slotData.conName"  :pageNumber ="index" :conData="slotData.conData"
        ></xes-inputlock>
    </template>
</xes-operate>

  
```
2.filterKey != targetEle(经典题型匹配)
```js
<xes-accordion :tabShowStatus = "tabShowStatus" :pageNumber="index" name ="拖拽物" refName="option3">   
</xes-accordion>
<div class="game-inner" v-if="tabShowStatus[index].child.option3">
        <xes-operate :allData="allData" :pageNumber="index" name="拖拽物" filterKey="drag">
            <template slot-scope="slotData">
                    <xes-upload-image :allData="allData" :resourceData="resourceData" :conData="slotData.conData" :conName="slotData.conName" ></xes-upload-image>
            </template>
        </xes-operate>
</div>
<xes-operate :allData="allData" :pageNumber="index" name="目标区域" filterKey="target">
    <template slot-scope="slotData">
        <xes-upload-image :allData="allData" :resourceData="resourceData" :conData="slotData.conData" :conName="slotData.conName" ></xes-upload-image>
        <xes-input :allData="allData" :conName="slotData.conName" :pageNumber ="index"  :conData="slotData.conData"
            name="X" value="x"></xes-input>
        <xes-input :allData="allData" :conName="slotData.conName" :pageNumber ="index"  :conData="slotData.conData"
            name="Y" value="y"></xes-input>
        <xes-inputlock :allData="allData" :resourceData="resourceData" :conName="slotData.conName"  :pageNumber ="index" :conData="slotData.conData"
        ></xes-inputlock>
    </template>
</xes-operate>
```