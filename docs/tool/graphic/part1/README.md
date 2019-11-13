---
title: select选择器
---
# select选择器 
---
<xes-select></xes-select>
```js
<xes-select
 :allData="allData" 
 :pageNumber="index" 
 :filterKey="drag"
 :targetEle = "target"
 :name="拖拽物" 
 :label="拖拽物" 
 ref="optionSelect"
 @change="text($event)">
 </xes-select>
```
# Xes-select Events
事件名称|说明|回调参数
:--|:--|:--
change|绑定值变化时触发的事件|选中的元素的componentName

# Xes-select Attributes
参数      |说明                         |类型            |可选值|默认值
:---------|:-------------------------- |:--             |:--  |:--
allData   |content.json配置⽂件整体数据 |json            |—     |—
pageNumber|所在第几⼩题                 |number/string   |—	    |—
targetEle |该组件返回值绑定对象     |string          |—	   |—	
filterKey |该组件所需数据源关键值        |string          |—	   |—	
label     |Select下拉框名称             |string          |—	    |—	
name      |组件名称                     |string          |—	    |—	
# example
1.filterKey = targetEle(经典题型单选)
```js
<xes-select :allData="allData" :pageNumber="index" filterKey="choice" targetEle="choice" name="拖拽物" label="拖拽物" @change="text($event)">
</xes-select>
<xes-operate :allData="allData" :pageNumber="index" name="正确选项" filterKey="choice">
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
        <xes-select :allData="allData" :pageNumber="index" filterKey="drag" :targetEle="slotData.conName" name="拖拽物" label="拖拽物" @change="text($event)">
        </xes-select>
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