---
title: 幼教项目开始页组件
---
# 幼教项目开始页组件 
---

# 简介
幼教项目开始页组件

# 配置说明
配置项|类型|描述|默认值
:--|:--|:--|:--
bgConfig|Object|背景动效的配置|无
bgConfig.name|String|动画Json名称|animation_starscreen
bgConfig.AniName|String|默认状态动画名称|idle
bgConfig.AniName2|String|切换状态动画名称|touch
bgConfig.x|Number|动画x轴所在位置|961
bgConfig.y|Number|动画y轴所在位置|860
audioClick|String|点击音效|audio_click
btnConfig|Object|按钮动效的配置|无
btnConfig.name|String|动画Json名称|animation_starscreen
btnConfig.AniName|String|默认状态动画名称|idle
btnConfig.AniName2|String|切换状态动画名称|touch
btnConfig.x|Number|动画x轴所在位置|950
btnConfig.y|Number|动画y轴所在位置|860

# 事件
事件名|参数|描述
:--|:--|:--
startGame|无|当游戏开始时发布

# example
```js
  import {Easy} from "pubtool4pixi"
  Easy.create("Preschool_Start",{
      parentContainer:stage,
      bgConfig:{
          name:"animation_start",
          AniName:"idle",
          AniName2:"touch",
          x:500,
          y:600
      }
  }).show();
   Easy.create("Preschool_Start",{
      parentContainer:stage,
      btnConfig:{
          name:"animation_start",
          AniName:"idle",
          AniName2:"touch",
          x:500,
          y:600
      }
  }).show();
```