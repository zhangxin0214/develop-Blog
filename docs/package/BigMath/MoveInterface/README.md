---
title: 移动元素工具
---
# 移动元素工具 
---
<xes-moveInterface></xes-moveInterface>
# 简介
移动PIXI.DisplayObject 元素的接口。通过调用可快速为DisplayObject添加移动的框架，移动后的坐标信息打印至console中。
# example
```js
import {Easy} from "pubtool4pixi";
var sprite = new PIXI.Sprite(res["image_test"].texture);
stage.addChild(sprite);
Easy.moveInterface(sprite);
```