---
title: 幼教项目结束页组件
---
# 幼教项目结束页组件 
---

# 简介
幼教项目结束页组件

# 配置说明
配置项|类型|描述|默认值
:--|:--|:--|:--
bgConfig|Object|背景动效的配置|无
bgConfig.name|String|动画Json名称|animation_give_me_five
bgConfig.AniName|String|默认状态动画名称|talk
bgConfig.AniName2|String|切换状态动画名称|idle
bgConfig.AniName3|String|切换状态动画名称|touch
bgConfig.x|Number|动画x轴所在位置|960
bgConfig.y|Number|动画y轴所在位置|540
soundConfig|Object|播放音乐的配置|无
soundConfig.name1|String|开始播放的音效|come_high_five
soundConfig.name2|String|击掌播放的音效|high_five

# 事件
事件名|参数|描述
:--|:--|:--
startGame|无|当游戏开始时发布

# example
```js
  import {Easy} from "pubtool4pixi"
  Easy.create("Preschool_End",{
       parentContainer:Game,
        bgConfig:{
            name:"animation_give_me_five",
            AniName:"talk",
            AniName2:"idle",
            AniName3:"touch",
            x:960,
            y:540
        },
    soundConfig:{
        name1  : "come_high_five",
        name2:"high_five",
    },
  }).show();
```