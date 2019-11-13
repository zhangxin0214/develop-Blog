---
title: 一般按钮组件
---
# 一般按钮组件 
---

# 简介
依据大数学游戏按钮规范提供的按钮组件，包含按钮三态切换，点击音效
# 配置说明
创建normalBtn类时需传入ClickSprite属性，此属性为Object，内含name属性，
name为按钮默认状态的资源名称，
鼠标移入按钮状态应为name+"over"。
鼠标点击按钮状态应为name+"click"。

一个普通的按钮应提供三个图片，分别为

图片名称|资源名称|描述
:--|:--|:--
btn.png|btn|默认图标
btnclick.png|btnclick|点击图标
btnover.png|btnover|鼠标移入图标

# example
```js
import {Easy} from "pubtool4pixi";
function gameEnd(){
    console.log("End");
}
var Btn1 = Easy.create("normalBtn",{
            parentContainer:this,
            ClickSprite: {name: "image-gameScene_btn1"},
        });
Btn1.show();
Btn1.addEventOnce("onClick",()=>{
    gameEnd();
});
```