   <template>
    <div class="animation">
      <span class="animate-title">动画类型:</span>
      <div
        style="width:130px;height:100%;background:#343434;padding:10px; position: absolute;left:1rem;top:2.5rem"
      >
        <ul class="animateList">
          <li
            v-for="(val,ind) in animationList"
            :id="val.label"
            @click="tabAnimationType(val)"
          >{{val.name}}</li>
        </ul>
      </div>
      <div class="box-img" style="width:20rem;height:20rem; position: absolute;left:22rem;top:1.2rem">
        <img
          id="box"
          ref="monkey"
          class="img-target"
          style="width:100px;height:100px;position:absolute;transform:matrix(1,0,0,1,100,100)"
          src="../public/images/houzi.png"
          alt
        />
      </div>
    </div>

    <!-- slot预留插槽 -->
    <!-- <slot :conName="componentData.componentName" :index="pageNumber" ></slot> -->
  </div>
</template>
<script>
import xesAnimate from "./animate";
class Test {
  constructor(dom, originalWidth, originalHeight) {
    this.dom = dom;
    this.originalWidth = originalWidth;
    this.originalHeight = originalHeight;
    let anchorX = 0;
    let anchorY = 0;
    let scaleX = 1;
    let scaleY = 1;
    let width = originalWidth;
    let height = originalHeight;
    let x = 0;
    let y = 0;
    Object.defineProperties(this, {
      alpha: {
        get() {
          if (!dom.style.opacity) {
            return 0;
          }
          return parseFloat(dom.style.opacity);
        },
        set(para) {
          dom.style.opacity = para;
        }
      },
      anchorX: {
        get() {
          return anchorX;
        },
        set(para) {
          anchorX = para;
          caculateMatrix();
        }
      },
      anchorY: {
        get() {
          return anchorY;
        },
        set(para) {
          anchorY = para;
          caculateMatrix();
        }
      },
      width: {
        get() {
          return width;
        },
        set(para) {
          width = para;
          caculateMatrix();
        }
      },
      height: {
        get() {
          return height;
        },
        set(para) {
          height = para;
          caculateMatrix();
        }
      },
      x: {
        get() {
          return x;
        },
        set(para) {
          x = para;
          caculateMatrix();
        }
      },
      y: {
        get() {
          return y;
        },
        set(para) {
          y = para;
          caculateMatrix();
        }
      },
      scaleX: {
        get() {
          return scaleX;
        },
        set(para) {
          scaleX = para;
          caculateMatrix();
        }
      },
      scaleY: {
        get() {
          return scaleY;
        },
        set(para) {
          scaleY = para;
          caculateMatrix();
        }
      }
    });
    let me = this;
    function caculateMatrix() {
      let trueX =
        x +
        anchorX * me.originalWidth +
        me.originalWidth * (1 - scaleX) * anchorX;
      let trueY =
        y +
        anchorY * me.originalHeight +
        me.originalHeight * (1 - scaleY) * anchorY;
      let sMatrix = `matrix(${scaleX*(width/me.originalWidth)},0,0,${scaleY*(height/me.originalHeight)},${trueX},${trueY})`;
      me.dom.style.transform = sMatrix;
    }
  }
}
export default {
  data() {
    return {
      value1: true,
      radio: 1,
      animationList: [
        { name: "从上往下", animate: "bounceInDown", label: "1" },
        { name: "出场效果", animate: "bounceOutDown", label: "2" },
        { name: "从小变大Q弹", animate: "bounceIn", label: "3" },
        { name: "从下往上", animate: "bounceInUp", label: "4" },
        // { name: "从右往左", animate: "bounceInLeft", label: "5" },//没有
        { name: "从小变大", animate: "zoomIn", label: "6" },
        // { name: "从小变大弹跳", animate: "zoomInAn", label: "7" },//没有
        { name: "透明度从0-1", animate: "fadeIn", label: "8" },
        { name: "透明度从1-0", animate: "fadeOut", label: "9" },
        { name: "左右弹动", animate: "leftAndRight", label: "10" },
        { name: "上下弹动", animate: "upAndDown", label: "11" },
        { name: "闪烁效果", animate: "redFlicker", label: "12" },
        { name: "Q弹", animate: "bomb", label: "13" }
      ]
    };
  },
  methods: {
    tabAnimationType(val) {
      let omonkey = new Test(this.$refs["monkey"], 100, 100);
      omonkey.y = 100;
      omonkey.alpha = 1;
      omonkey.x = 100;
      omonkey.width = 100;
      omonkey.height = 100;
      this.creatAnimation(omonkey, val.animate).then(() => {
        console.log("end");
      });
      window.abc = omonkey;
    },
    creatAnimation(child, global, time = 0.5) {
      return new Promise(resolve => {
        new xesAnimate(child, {
          time: 0.5,
          type: global,
          delay: 0,
          onComplete: () => {
            resolve();
          }
        });
      });
    }
  }
};
</script>

<style scoped>
.input-x {
  background: #2e2e2e !important;
  color: #fff !important;
  border: none !important;
  border-radius: 0 !important;
  border: 1px solid #6c6c6c !important;
  height: 25px;
  width: 100px;
  margin-top: 10px;
  font-size: 20px;
}
.el-input-group {
  margin-top: 15px;
  width: 50%;
  /* float: left; */
}
.el-input-group__append,
.prepend {
  border: none !important;
  background: #383838 !important;
  color: #fff !important;
  font-size: 14px !important;
  padding: 0 10px;
}

.upload {
  background: #343434;
  width: 20rem;
  height: 8rem;
  margin: 0;
  overflow: hidden;
  padding: 5px;
}
.file-title {
  float: left;
  width: 28%;
  color: #fff;
  height: 32px;
  line-height: 32px;
}
.animate-box {
  width: 42%;
  float: left;
  height: 32px;
  box-sizing: border-box;
  text-align: left;
  line-height: 32px;
  padding: 0 5px;
  font-size: 14px;
  color: #999;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.upload-btn {
  float: right;
  width: 30%;
}
.upload-btn-file {
  position: relative;
  width: 80px;
  height: 32px;
  line-height: 30px;
  text-align: center;
  border-radius: 5px;
  background: #666666;
  color: #fff;
  float: right;
}
.upload-btn-file span {
  font-size: 14px;
}
.upload-btn-file input {
  width: 80px;
  height: 30px;
  opacity: 0;
  position: absolute;
  left: 0;
  top: 0;
  cursor: pointer;
}
.animation {
  background: #343434;
  width: 45.5rem;
  height: 20rem;
  margin: 0;
  overflow: hidden;
  padding: 5px;
  border-radius: 5px;
  position: relative;
}
.animate-title {
  float: left;
  width: 28%;
  color: #fff;
  height: 50px;
  line-height: 50px;
  text-indent: 2.4rem;
}
.img-target {
  width: 100px;
  height: 100px;
}
.animateList {
  list-style: none;
  color: #eee;
  font-size: 15px;
  text-align: center;
  width: 300px;
  height: 500px;
}
.animateList > li {
  /* border: 1px solid rgb(146, 145, 145); */
  margin-bottom: 10px;
  margin-right: 12px;
  border-radius: 5.5px;
  background-color: rgb(95, 93, 93);
  width: 120px;
  float: left;
  line-height: 28px;
  height: 28px;
  cursor: pointer;
  box-shadow: 1px 1px 1.2px 1px rgb(20, 18, 18);
  /* box-shadow: darkgrey 0px 0px 0px 1px; */
}
</style>