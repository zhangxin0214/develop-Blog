---
title: 编辑器API
---
# 编辑器API
---

# 页面相关接口
## 示例
```
import {api} from 'xeditor-convertor'; //从数据包中导入接口  

// 复制一个对象
let newObject = api.copy(object)  

// 点击按钮，跳转到下一页
nextPageBtn.on('pointertap', () => {
    api.nextPage();
})

//填空题，获取正确答案
let rightAnswer = api.getCustomPropValue(blankObject,'answer')  
```

## 方法
## nextPage()  
### 描述  
跳转到下一页  
### 参数
无  
### 返回
无  

## prevPage()  
### 描述
跳转到上一页  
### 参数
无  
### 返回
无  

## changePage(index)  
### 描述
跳转到指定页  
### 参数
参数|类型|是否必须|描述
:--|:--|:--|:--
index | Number | true | 目标页面序号  
### 返回
无  

## copy(obj)  
### 描述
复制对象。复制出来的对象和原对象会在同一个容器中  
### 参数  
参数|类型|是否必须|描述
:--|:--|:--|:--
obj | Object | true | 要复制的对象
### 返回
复制出的来对象  

## getChildrenByCompType(containerObj,typeName)  
### 描述
在某个容器中根据自定义组件名称查找对象  
### 参数
参数|类型|是否必须|描述
:--|:--|:--|:--
containerObj | Object | true | 容器对象
typeName | String | true | 自定义组件名称
### 返回
自定义组件数组  

## getChildById(containerObj,id)  
### 描述
在某个容器中根据id查找对象  
### 参数  
参数|类型|是否必须|描述
:--|:--|:--|:--
containerObj | Object | true | 容器对象
id | Number | true | 对象id  
### 返回
查找出的对象  

## getCustomPropValue(obj,key)  
### 描述
获取自定义组件的属性值  
### 参数    
参数|类型|是否必须|描述
:--|:--|:--|:--
obj | Object | true | 自定义组件对象
key | String | true | 属性名称 
### 返回
属性值  

## getAllPages()  
### 描述
获取所有页面  
### 参数
无   
### 返回
包含所有页面的数组。形如[page1Object,page2Object]  

<br/><br/><br/>

# 页面中的对象相关接口
## 示例
```
//播放声音
soundObject.play()

//spine动画循环播放
spineObject.animatedPlay(true)  
```

# 音频
## play(loop=false) 
### 描述
播放声音  
### 参数    
参数|类型|是否必须|描述
:--|:--|:--|:--
loop | Boolean | false | 是否循环播放。默认false
### 返回
无  
## stop() 
### 描述
停止播放声音  
### 参数
无   
### 返回
无  

# 序列帧动画
## animatedPlay(loop) 
### 描述
开始播放    
### 参数    
参数|类型|是否必须|描述
:--|:--|:--|:--
loop | Boolean | false | 是否循环播放。默认值来自属性面板中的设置
### 返回
无  
## animatedStop() 
### 描述
停止播放  
### 参数  
无   
### 返回
无  

# spine动画
## animatedPlay(loop) 
### 描述
开始播放    
### 参数    
参数|类型|是否必须|描述
:--|:--|:--|:--
loop | Boolean | false | 是否循环播放。默认值来自属性面板中的设置
### 返回
无  
## animatedStop() 
### 描述
停止播放  
### 参数  
无   
### 返回
无 

<br/><br/><br/>

# 事件
## 示例
```
stage.on("stageAdded", () => {
    console.log("页面显示了")
})

soundObject.on("soundComplete", () => {
    console.log("声音播放完毕")
})
```

## 舞台对象
### stageAdded事件
页面显示时触发   
  
### stageRemoved事件
页面移除时触发   
  
## 声音对象
### soundPlay事件
声音开始播放 

### soundComplete事件
声音播放完毕

