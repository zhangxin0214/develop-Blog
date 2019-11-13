---
title: 观察者模型
---
# 观察者模型 
---
# 简介
观察者模式是一种对象行为模式。它定义对象间的一种一对多的依赖关系，当一个对象的状态发生改变时，所有依赖于它的对象都得到通知并被自动更新。在观察者模式中，主题是通知的发布者，它发出通知时并不需要知道谁是它的观察者，可以有任意数目的观察者订阅并接收通知。观察者模式不仅被广泛应用于软件界面元素之间的交互，在业务对象之间的交互、权限管理等方面也有广泛的应用。

# example
```js
import {Easy} from "pubtool4pixi";
class ObservableClass{}
var instance = new ObservableClass();
Easy.observable(instance);
instance.addEvent("TestEvent",()=>{
    console.log("TestEvent");
});
instance.addEventOnce("TestEvent",()=>{
    console.log("TestEvent1");
});
instance.fireEvent("TestEvent");
var e = instance.addEventOnce("TestEvent",()=>{
    console.log("cancel");
});
e.cancel();
```
# 属性与方法
属性|说明
:--|:--
_Myevent |存储观察者事件

## addEvent方法
### 描述 
添加观察者
### 参数 
参数|类型|是否必须|描述
:--|:--|:--|:--
EventName | String | true | 事件名称
fn | Function | true | 当事件触发时的回调函数
scope | Object | false | 回调函数的作用域默认为this
isOnce | Boolean | false | 是否执行一次就销毁

## fireEvent方法
### 描述 
发布事件
### 参数 

参数|类型|是否必须|描述
:--|:--|:--|:--
EventName | String | true | 事件名称
arg | Array | false | 需要传入回调函数的参数

## removeEvent方法
### 描述 
删除某个观察者
### 参数 

参数|类型|是否必须|描述
:--|:--|:--|:--
EventName | String | true | 事件名称
fn | Function | true | 当前事件的回调函数

## addEventOnce方法
### 描述 
添加只观测一次的观测者
### 参数 

参数|类型|是否必须|描述
:--|:--|:--|:--
EventName | String | true | 事件名称
fn | Function | true | 当事件触发时的回调函数
scope | Object | false | 回调函数的作用域默认为this

## removeAllEvent方法
### 描述 
删除所有观测者。
### 参数 
无