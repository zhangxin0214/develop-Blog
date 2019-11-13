---
title: 日志
---
## 日志查询平台
<a href="http://basiclog.xesv5.com/app/kibana#/discover?_g=()&_a=(columns:!(_source),index:'96a955f0-d928-11e9-819f-9f3378952d0b',interval:auto,query:(language:lucene,query:''),sort:!('@timestamp',desc))
" target="_Blank">传送门</a>
### 检索方式
``示例``  
"userId 8197210" AND "liveId 422889"
### 日志种类
* 展现日志(pv_{appid}.log)  https://dj.xesimg.com/a.gif
* 交互日志(interactive_{appid}.log) https://dj.xesimg.com/b.gif
* 系统日志(sys_{appid}.log) https://dj.xesimg.com/c.gif
## 课中互动课件
### Appid&Appkey
``测试环境``
::: tip  
&#160;* appid:1001680   
&#160;* appkey:540054578e9b13f75e0a7c13ddbd9e85
:::
``正式环境``
::: tip  
&#160;* appid:1001836   
&#160;* appkey:1c22c1763330c926eef965e249ae4f44
:::
---
### 课件日志上报必传字段
### 展现日志
参数      |说明                         
:---------|:-------------------------- 
liveId   |场次id
userId   |学生id
device   |用户设备
url|课件链接       
type |错误类型
msg |错误信息
line|错误行数 
### 交互日志
参数      |说明                         
:---------|:-------------------------- 
liveId   |场次id
userId   |学生id
device   |用户设备
url|课件链接       
answerData |提交数据

## 课前课后
### Appid&Appkey
``测试环境``
::: tip  
appid:  1001771  
appkey:  a9c2b3648f1ba943e00a56671826bca5

:::
``正式环境``
::: tip  
appid:   1002019  
appkey:  a15c04172d7e7269227c868e2677de00
:::
---

## 示例

```js
this.$time = new Date().getTime();
const interactive_params = qs.stringify({
    content: JSON.stringify(
    {
        liveId:this.liveId,
        userId:this.userId,
        url: window.location.href,
        device:navigator.userAgent.toLowerCase(),
        answerData:answerData
    }),
    appid:this.$Appid,
    sign:md5(this.$Appid+'&'+ this.$time + this.$appkey ),
    clits:this.$time
})
axios.post('https://dj.xesimg.com/b.gif',interactive_params)
.then(function (response) {
    console.log("答题数据日志上报成功");
})
.catch(function (error) {
    console.log("答题数据日志上报失败");
});
```    