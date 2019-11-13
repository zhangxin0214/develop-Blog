---
title: Answer接口
---
# Answer接口
* xes-answer (npm包)  
``安装``
```
npm i xes-answer  
```  
``引用``
```js
import {AnswerInfo,Loading,Question,postAnswer} from 'xes-answer';
```
``示例``
```js
//创建答题接口实例
let answer = new AnswerInfo();

//loading接口
Loading();

//初始化每题的答题数据
answer.answerDefault({type:0,useranswer:''})

//每小题的答题数据，该题加载完成前调用此方法
Question({id:'0',currentTotalOption:'1'})

//每答一题调用
answer.init({type: 2, useranswer: userAnswer, answer: rightAnswer, id: store.state.serialNum, rightnum: rightNum, wrongnum: wrongNum});
/*
* parameter
* id 该题目id 从0开始
* type 0:单选/操作游戏类 1:多选 2:填空   类型:number
* useranswer 学生答案 类型:type:0 --> string; type:1/2  --> Array
* answer 正确答案 类型:type:0 --> string; type:1/2  --> Array
* rightnum 答对的个数 type:number
* wrongnum 答错的个数 type:number
*/
//每次调用完init方法后调用 作用保存该题答题数据
store.dispatch('pushToPostArr', answer);

//最后一题提交答题数据
store.dispatch('postAnswer');
```
---

