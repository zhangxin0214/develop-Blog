---
title: 静音按钮组件
---
# 静音按钮组件 
---

# 简介
依据大数学游戏按钮规范提供的静音按钮组件，包含按钮两态切换，按钮位置，点击音效，点击功能
# 配置说明
无需配置，仅需提素材。
一个普通的按钮应提供两个图片，分别为

图片名称|资源名称|描述
:--|:--|:--
playsound.png|pub_playsound|正在播放图标
muteclick.png|pub_muteclick|已静音图标

# example
```js
import {Easy} from "pubtool4pixi";
Easy.create("muteBtn",{
    parentContainer:stage
}).show();
```