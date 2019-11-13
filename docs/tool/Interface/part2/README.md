---
title: 接口SDK
---
## AnswerJs
# 设计原则
* 将接口数据处理逻辑与业务层代码进行分离，统一由AnswerJs进行处理，让开发模板的伙伴脱离复杂的接口逻辑处理，便于接口更新和维护。
# 适应范围
  所有课中课件 

``引用``
```
<script src="answer.js"></script>
```  
# 教程
``创建接口示例``
```js
//创建在loading之前
let answer = new AnswerInfo();
```
``调用loading接口``
```js
//资源加载完之后调用
answer.loading();
```
``初始化课件标签``
```js
/*
* 初始化课件标签
* @param label    0:引导；1:⾮引导；2:纯玩(游戏) 
*/
 answer.initLabel(label);
```
``初始化课件正确答案``
```js
/*
* 初始化课件正确答案
* @param id             该小题id
* @param type           0:单选/操作类游戏 1:多选 2:填空
* @param rightAnswer    该小题正确答案
*/
* 需根据模板本身需求自己处理方法所需的参数
* 游戏类型课件text:''即可
var answer = ['A','B','C'];//每个小题的正确答案
var testNum = 3;//总共的题数
for(var i=0;i<testNum;i++){
  answer.initRightAnswer({
            "id":i,
            "type":0,
            "rightAnswer":[{
                                'id':0,
                                'text':answer[i]
                }]}
  );
}
```
``初始化小题数据``
```js
* 每小题加载完成时调用一次
/*
* 初始化小题数据
* @param id                    当前小题id *
* @param currentTotalOption    当前小题空数或选项数 *
* @param totalQuestion         该课件总共有的题数 *    
*/
answer.questionInfo({
        id: 0,
        currentTotalOption: 3,
        totalQuestion: 2
    });
```
``每答一次题调用一次init方法``
```js
* 游戏操作类型的课件(如:连线引导类、拖拽引导类、分类引导类),做完一页题,调用一次init方法,
  其中text:''即可
/*
* 每答一次题调用一次init方法
* @param id    当前小题id *
* @param text  当前选项值/填空输入值
*/
answer.init({
                    id:0,
                    text:'A'
        });
```
``提交调用(submitAnswer方法)``
```js
* 做完最后一题上报数据，调用该方法
answer.submitAnswer();
```
---
## 新通讯协议
   * 非课中课件,需要与端通讯，参照一下文档,取代之前postMessage通讯方式
   * 使用前，务必与端开发伙伴沟通好他是否支持新通讯协议   
   <a href="http://wiki.xesv5.com/pages/viewpage.action?pageId=18916154" target="_Blank">传送门</a>
   

