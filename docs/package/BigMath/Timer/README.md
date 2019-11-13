---
title: 计时器组件
---
# 计时器组件 
---

# 简介
大数学游戏计时组件
# 配置说明
配置项|类型|描述|默认值
:--|:--|:--|:--
timeSprite|String|计时器组件资源名称|mage-gameScene_timer
timeCountSound|String|倒计时音效|null
textConfig|Object|计时器文字配置|无
textConfig.x|Number|文字x轴|205.45745125612848
textConfig.y|Number|文字y轴|67.41621621621623
textConfig.textStyle.fontSize|Number|文字大小|55
textConfig.textStyle.fill|Number|文字颜色|0x204931
textConfig.textStyle.fontFamily|String|文字样式|Microsoft Yahei
textConfig.textStyle.fontWeight|String|文字宽度|bold

# 方法
方法名|参数|描述|返回值
:--|:--|:--|:--
start|time(Number)|开始计时|undefined
stop|无|停止计时|undefined
pause|无|暂停计时|undefined
continue|无|继续计时|undefined

# 事件
事件名|参数|描述
:--|:--|:--
onTimeRun|剩余秒数|当计时器运行时会定期发布
timeup|无|倒计时结束发布

# example
```js
import {Easy} from "pubtool4pixi"
 let timer = Easy.create("BigMath_Timer",{
     parentContainer:stage
  });
  timer.show();
  timer.start(800);
  timer.addEventOnce("timeup",()=>{
      console.log("timeup");
  });
  setTimeout(()=>{
      timer.stop();
  },1000);
```