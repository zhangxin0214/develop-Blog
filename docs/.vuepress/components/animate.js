import {TweenLite, TweenMax,TimelineMax} from 'gsap';

class xesAnimate {
    constructor(obj, options = {}) {
      console.log("动画constructor",obj.y,"rjsz")
        this.obj = obj;
        this.time = options.time ? options.time : 0.6;
        this.delay = options.delay ? options.delay : 0;
        this.onComplete = options.onComplete ? options.onComplete : '';
        this.type = options.type || 'zoomIn';
        this.setAnimation(this.type, this.onComplete);
    }
    setAnimation(type, callback) {
      console.log("动画入口top",this.obj.y,"rjsz")
        switch (type) {
            case 'bounceInDown':
                let animateSlideDown = new TimelineMax();
                this.obj.alpha = 0;
                animateSlideDown.to(this.obj, 0.1, {
                    delay:this.delay,
                    y: this.obj.y-3000
                });
                animateSlideDown.to(this.obj, this.time*0.6, {
                    y: this.obj.y+25,
                    alpha:1,
                });
                animateSlideDown.to(this.obj, this.time*0.15, {
                    y: this.obj.y-10
                });
                animateSlideDown.to(this.obj, this.time*0.15, {
                    y: this.obj.y+5
                });
                animateSlideDown.to(this.obj, this.time*0.1, {
                    y: this.obj.y,
                    onComplete:()=>{
                        if (this.onComplete) {
                            callback()
                        }
                    }
                });
                break;
            case 'bounceOutDown':

                let animateSlideOutDown = new TimelineMax();
                animateSlideOutDown.to(this.obj, this.time*0.2, {
                    delay:this.delay,
                    ease:'Quad',
                    y: this.obj.y+10
                });
                animateSlideOutDown.to(this.obj, this.time*0.25, {
                    y: this.obj.y-20,
                    ease:'Quad',
                });
                animateSlideOutDown.to(this.obj, this.time*0.45, {
                    y:this.obj.y+2000,
                    ease:'Quad',
                    alpha:0,
                    onComplete:()=>{
                        if (this.onComplete) {
                            callback()
                        }
                    }
                });
                break;
            case 'bounceInUp':
                let animateBounceInUp = new TimelineMax();
                this.obj.alpha = 0;
                animateBounceInUp.to(this.obj, this.time*0.1, {
                    delay:this.delay,
                    y: this.obj.y+3000
                });
                animateBounceInUp.to(this.obj, this.time*0.6, {
                    y: this.obj.y-20,
                    alpha:1,
                });
                animateBounceInUp.to(this.obj, this.time*0.15, {
                    y: this.obj.y+10
                });
                animateBounceInUp.to(this.obj, this.time*0.15, {
                    y: this.obj.y-5
                });
                animateBounceInUp.to(this.obj, this.time*0.1, {
                    y: this.obj.y,
                    onComplete:()=>{
                        if (this.onComplete) {
                            callback()
                        }
                    }
                });
                break;
            case 'bounceIn':
                let animateBounceIn = new TimelineMax();
                this.obj.alpha = 0;
                animateBounceIn.to(this.obj, 0, {
                    delay:this.delay,
                    width:this.obj.width*0.75,
                    height:this.obj.height*0.75
                });
                this.obj.alpha = 1;
                animateBounceIn.to(this.obj, this.time*0.2, {
                    width:this.obj.width*1.1,
                    height:this.obj.height*1.1
                });
                animateBounceIn.to(this.obj, this.time*0.2, {
                    width:this.obj.width*0.95,
                    height:this.obj.height*0.95
                });
                animateBounceIn.to(this.obj, this.time*0.2, {
                    width:this.obj.width*1.03,
                    height:this.obj.height*1.03
                });
                animateBounceIn.to(this.obj, this.time*0.2, {
                    width: this.obj.width * 0.97,
                    height: this.obj.height * 0.97
                });
                animateBounceIn.to(this.obj, this.time*0.2, {
                    width:this.obj.width*1,
                    height:this.obj.height*1,
                    onComplete:()=>{
                        if (this.onComplete) {
                            callback()
                        }
                    }
                });
                break;
            case 'zoomIn':
                this.obj.alpha = 1;
                this.obj.width = this.obj.width*0.5;
                this.obj.height = this.obj.height*0.5;
                // this.obj.dom.style.transform = 'matrix(0.5, 0, 0, 0.5, 0, 0)';

                TweenMax.to(this.obj, this.time*0.5, {
                    width:100,
                    height:100,
                    delay:this.delay,
                    onComplete: () => {
                        if (this.onComplete) {
                            callback()
                        }
                    }
                });
                break;
            case 'fadeIn':
                this.obj.alpha = 0;
                TweenMax.to(this.obj, this.time, {
                    alpha: 1,
                    delay: this.delay,
                    onComplete: () => {
                        if (this.onComplete) {
                            callback()
                        }
                    }
                });
                break;
            case 'fadeOut':
                this.obj.alpha = 1;
                TweenMax.to(this.obj, this.time, {
                    alpha: 0,
                    delay: this.delay,
                    onComplete: () => {
                        if (this.onComplete) {
                            callback()
                        }
                    }
                });
                break;
            case 'leftAndRight':
                let animateLeftAndRight = new TimelineMax();
                console.log("动画获取",this.obj.y,"rjsz")
                animateLeftAndRight.to(this.obj, 0.05, {
                    x: this.obj.x-10,
                    ease:'linear'
                });
                animateLeftAndRight.to(this.obj, 0.1, {
                    x: this.obj.x+10,
                    ease:'linear'
                });
                animateLeftAndRight.to(this.obj, 0.1, {
                    x: this.obj.x-10,
                    ease:'linear'
                });
                animateLeftAndRight.to(this.obj, 0.1, {
                    x: this.obj.x+10,
                    ease:'linear'
                });
                animateLeftAndRight.to(this.obj, 0.1, {
                    x: this.obj.x-10,
                    ease:'linear'
                });
                animateLeftAndRight.to(this.obj, 0.1, {
                    x: this.obj.x+10,
                    ease:'linear'
                });
                animateLeftAndRight.to(this.obj, 0.05, {
                    x: this.obj.x,
                    ease:'linear',
                    onComplete:()=>{
                        if (this.onComplete) {
                            callback()
                        }
                    }
                });
                break;
            case 'upAndDown':
                let animateUpAndDown = new TimelineMax();
                animateUpAndDown.to(this.obj, 0.05, {
                    y: this.obj.y-10,
                    ease:'linear'
                });
                animateUpAndDown.to(this.obj, 0.1, {
                    y: this.obj.y+10,
                    ease:'linear'
                });
                animateUpAndDown.to(this.obj, 0.1, {
                    y: this.obj.y-10,
                    ease:'linear'
                });
                animateUpAndDown.to(this.obj, 0.1, {
                    y: this.obj.y+10,
                    ease:'linear'
                });
                animateUpAndDown.to(this.obj, 0.1, {
                    y: this.obj.y-10,
                    ease:'linear'
                });
                animateUpAndDown.to(this.obj, 0.1, {
                    y: this.obj.y+10,
                    ease:'linear'
                });
                animateUpAndDown.to(this.obj, 0.05, {
                    y: this.obj.y,
                    ease:'linear',
                    onComplete:()=>{
                        if (this.onComplete) {
                            callback()
                        }
                    }
                });
                break;
            case 'redFlicker':
                let animateRedFlicker = new TimelineMax();
                animateRedFlicker.to(this.obj, 0.15, {
                    alpha:0.6,
                    ease:'linear'
                });
                animateRedFlicker.to(this.obj, 0.15, {
                    alpha:1,
                    ease:'linear'
                });
                animateRedFlicker.to(this.obj, 0.15, {
                    alpha:0.6,
                    ease:'linear'
                });
                animateRedFlicker.to(this.obj, 0.15, {
                    alpha:1,
                    ease:'linear',
                    onComplete:()=>{
                        if (this.onComplete) {
                            callback()
                        }
                    }
                });
                break;
            case 'bomb':
                let bombAndDown = new TimelineMax();
                this.obj.dataWidth = this.obj.width;
                this.obj.dataHeight = this.obj.height;
                // bombAndDown.to(this.obj, 0.12, {
                //     width:this.obj.dataWidth*1.05,
                //     height:this.obj.dataHeight*0.96,
                //     ease:'linear'
                // });
                // bombAndDown.to(this.obj, 0.12, {
                //     width:this.obj.dataWidth*0.97,
                //     height:this.obj.dataHeight*1.03,
                //     ease:'linear'
                // });
                // bombAndDown.to(this.obj, 0.12, {
                //     width:this.obj.dataWidth*1.02,
                //     height:this.obj.dataHeight*0.98,
                //     ease:'linear'
                // });
                // bombAndDown.to(this.obj, 0.12, {
                //     width:this.obj.dataWidth*0.99,
                //     height:this.obj.dataHeight*1.01,
                //     ease:'linear'
                // });
                // bombAndDown.to(this.obj, 0.12, {
                //     width:this.obj.dataWidth*1,
                //     height:this.obj.dataHeight*1,
                //     ease:'linear',
                //     onComplete:()=>{
                //         if (this.onComplete) {
                //             callback()
                //         }
                //     }
                // });
                   bombAndDown.to(this.obj, 0.12, {
                    width:this.obj.width*1.05,
                    height:this.obj.height*0.96,
                    ease:'linear'
                });
                bombAndDown.to(this.obj, 0.12, {
                    width:this.obj.width*0.97,
                    height:this.obj.height*1.03,
                    ease:'linear'
                });
                bombAndDown.to(this.obj, 0.12, {
                    width:this.obj.width*1.02,
                    height:this.obj.height*0.98,
                    ease:'linear'
                });
                bombAndDown.to(this.obj, 0.12, {
                    width:this.obj.width*0.99,
                    height:this.obj.height*1.01,
                    ease:'linear'
                });
                bombAndDown.to(this.obj, 0.12, {
                    width:this.obj.width*1,
                    height:this.obj.height*1,
                    ease:'linear',
                    onComplete:()=>{
                        if (this.onComplete) {
                            callback()
                        }
                    }
                });
                break;
            case 'default':
                if (this.onComplete) {
                    callback()
                }
                break;
            default:
                break
        }
    }
}
export default xesAnimate