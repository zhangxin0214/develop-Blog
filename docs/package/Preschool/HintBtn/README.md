---
title: 提示按钮组件
---
# 提示按钮组件 
---

# 简介
幼教提示按钮,幼教项目游戏页组件.

# 配置说明
配置项|类型|描述|默认值
:--|:--|:--|:--
updateBool|Boolean|控制播放与暂停|true
soundOne|Boolean|true为播放，false为恢复|true
name|String|动效名称|animation_aniu
AniName|String|默认状态动画名称|wenhao
AniName2|String|提示音播放切换的动画名称|yinyue
audio|String|提示音乐名称|audio_hint
x1|Number|动效x轴位置|1778.6915887850466
y1|Number|动效y轴位置|24.672897196261676

# example
```js
  import {Easy} from "pubtool4pixi"
  Easy.create("Preschool_HintBtn",{
    parentContainer:this,
    name:'animation_aniu',
    AniName:'wenhao',
    AniName2:'yinyue',
    audio:'audio_hint',
    x1:1778.6915887850466,
    y1:24.672897196261676,
  }).show();
```