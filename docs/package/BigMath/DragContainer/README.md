---
title: 拖拽容器
---
# 拖拽容器 
---

# 简介
拖拽容器组件

# example
```js
  import {Easy} from "pubtool4pixi";
Easy.define("myDragItem",{
    extend:"BigMath_DragItem",
    init(){
        this.bg = new PIXI.Sprite(this.res["image_abc"].texture);
        this.addChild(this.bg);
    }
});
  let c = Easy.create("BigMath_DragContainer",{
      parentContainer:stage
  });
  let dragItem = Easy.create("myDragItem",{
      parentContainer:stage
  });
    let dragItem1 = Easy.create("myDragItem",{
      parentContainer:stage
  });
  c.addDragItems([dragItem]);
  c.addTargetItems([dragItem1]);
  dragItem.addEvent("Dragging",()=>{
      console.log("Dragging");
  });
```