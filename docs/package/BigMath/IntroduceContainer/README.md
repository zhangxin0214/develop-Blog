---
title: 引导页容器组件
---
# 引导页容器组件 
---

# 简介
引导页容器组件

# example
```js
  import {Easy} from "pubtool4pixi"
  let c = Easy.create("BigMath_IntroduceContainer",{
      parentContainer:stage
  });
c.show();
c.addItem([new PIXI.Sprite(res['image-gameScene_title'].texture)]);
setTimeout(()=>{
    c.releaseAllItem();
},5000);
```