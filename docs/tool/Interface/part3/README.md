---
title: 动效库
---

# 动效库 
``安装``
```
npm i xtemplate-editor
```
``引用``
```js
import {xesAnimate} from 'xtemplate-editor'
```
``示例``
```js
new AnimateClass(container,{
    time:0.5,               
    type:'fadeOut',        
    delay:0,               
    onComplete:()=>{       
         //动画执行后回调 如非必须 可不配置
    }
});
/*
* container 需要动画的元素  必填
* time 动画时间 默认0.6  可不配置
* type 动画名字 默认zoomIn 可不配置
* delay 延时 默认 0 可不配置
*/
```
``可选动效``
```
* bounceInDown    从上往下 弹跳
* bounceOutDown   出场效果 弹跳
* bounceIn        从小变大 弹跳
* bounceInUp      从下往上 弹跳
* bounceInLeft    从右往左 弹跳
* zoomIn          从小变大
* zoomInAn        从小变大 弹跳
* fadeIn          透明度从0-1
* fadeOut         透明度从1-0
* leftAndRight    左右弹动
* upAndDown       上下弹动
* redFlicker      闪烁效果
* bomb            Q弹
```
---

<xes-upload-animate></xes-upload-animate>

---
``如果你发现好的动效，一定要告诉我哈~``:smile:
