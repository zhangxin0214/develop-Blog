---
title: 引导手组件
---
# 引导手组件 
---

# 简介
大数学通用引导手势
# 配置说明
配置项|类型|描述|默认值
:--|:--|:--|:--
origin|Object|拖拽引导手势起点|无
origin.x|Number|x坐标值|500
origin.y|Number|x坐标值|960
destination|Object|拖拽引导手势起点|无
destination.x|Number|x坐标值|1400
destination.y|Number|x坐标值|500
isDrag|Boolean|是否是拖拽手势|true
spineName|String|手势动效名称|animation_hand_guide
clickAniName|String|点击手势动画名称|zhiyin
dragAniName1|String|拖拽手势开始动画名称|start
dragAniName2|String|拖拽手势结束动画名称|end

# 方法
方法名|参数|描述|返回值
:--|:--|:--|:--
Click|无|点击手势动画|undefined
Start|无|拖拽手势动画开始|undefined

# example
```js
    import {Easy} from "pubtool4pixi"
    let hand = Easy.create("BigMath_GuideHand",{
        parentContainer:this,
        isDrag : false
    });
    hand.show();
    let hand1 = Easy.create("BigMath_GuideHand",{
        origin : {
            x : 500,
            y : 960
        },
        destination : {
            x : 1400,
            y : 500
        },
        isDrag : true
    });
    hand1.show();

```