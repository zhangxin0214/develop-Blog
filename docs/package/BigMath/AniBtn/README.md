---
title: 动画按钮组件
---
# 动画按钮组件 
---

# 简介
大数学游戏开始界面动画按钮组件
# 配置说明
配置项|类型|描述|默认值
:--|:--|:--|:--
imgBtnName|String|图片按钮资源名称|image_startGame
aniBtnName|String|按钮动画名称|animation_btn
aniBtnAniName|String|按钮动画的动画名称|animation

# 事件
事件名|参数|描述
:--|:--|:--
onClick|无|点击按钮时触发

# example
```js
  import {Easy} from "pubtool4pixi"
  let aniBtn = Easy.create("BigMath_AniBtn",{
      parentContainer:stage
  });
  aniBtn.show();
  aniBtn.addEventOnce("onClick",()=>{
      console.log("Click");
  });
```