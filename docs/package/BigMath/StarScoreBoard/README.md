---
title: 星星进度条组件
---
# 星星进度条组件 
---

# 简介
大数学通用过关结算星星动效
# 配置说明
配置项|类型|描述|默认值
:--|:--|:--|:--
topicNumber|Number|游戏题目总数|3
marginDistance|Number|星星间隔值|80
starBgLocation|Object|背景位置|无
starBgLocation.x|Number|x坐标值|34
starBgLocation.y|Number|x坐标值|36
StarScoreBoard|String|计分板素材|image_StarScoreBoard
starLocation|Object|第一颗星星位置|无
starLocation.x|Number|x坐标值|63
starLocation.y|Number|x坐标值|55
bgIcon|String|默认状态的星星|image_starIdle
loseIcon|String|失败状态的星星|image_starLose
lightSpineName|String|成功状态的星星动效名称|animation_star
lightAniName|String|成功状态的星星播放的动画名称|star_in
starPathSpineName|String|星星飞的路径动效名称|animation_starflash
starPathAniName|String|星星飞的路径播放的动画名称|starflash_in
starSound|String|星星组件的音频配置|audio_starSound

# 方法
方法名|参数|描述|返回值
:--|:--|:--|:--
addWinStar|presentTopicNumber(Number)当前关卡的下标|添加成功星星|{Promise} 星星与路径动效播放完成
addLoseStar|presentTopicNumber(Number)当前关卡的下标|添加失败星星|{Promise} 星星与路径动效播放完成
reset|无|重置星星动效|undefined

# example
```js
  import {Easy} from "pubtool4pixi"
  Easy.create("BigMath_StarScoreBoard",{
      parentContainer:stage,
      topicNumber : 3,
      marginDistance:80,
      starBgLocation:{
          x:34,y:36
      }
 }).show();
```