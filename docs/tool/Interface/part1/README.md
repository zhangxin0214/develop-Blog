---
title: 组课工具
---
### 下载地址

<a href="http://icourse.xesimg.com/Tool/zukegongju-mac.zip">mac</a>&nbsp;&nbsp;&nbsp;<a href="http://icourse.xesimg.com/Tool/zukegongju-window.zip">window</a>
### 数据包 
``安装``
```
npm i xtemplate-editor --save
```

### 项目引入
```
import {xesAnimate} from 'xtemplate-editor'
```

### 组课工具项目结构
---
#### 目录结构
```
|-- common
|   `-- loader.js                       //公共部分
|-- lib                                 //导出目录
|   |-- Animate                         //动画库
|   |   `-- index.js
|   |-- Editor                          //编辑
|   |   |-- game                        //编辑游戏页
|   |   |   `-- index.js
|   |   |-- render                      //渲染
|   |   |   |-- DragElement.js
|   |   |   `-- index.js
|   |   |-- start                       //编辑开始页
|   |   |   `-- index.js    
|   |   `-- subtitle                    //编辑题干部分
|   |       `-- index.js
|   |-- Preview                         //预览
|   |   |-- game                        //预览游戏页
|   |   |   `-- index.js                
|   |   |-- start                       //预览开始页
|   |   |   `-- index.js
|   |   `-- subtitle                    //预览题干部分
|   |       `-- index.js                
|   |-- index.js
|   `-- packages
|       |-- Editor
|       |   `-- index.js
|       `-- Preview
|           `-- index.js
|-- package-lock.json
|-- package.json
|-- README.md                               
|-- src                                  //原始目录
|   |-- Animate                          //动画库   
|   |   |-- index.js
|   |   `-- readme.md
|   |-- Editor                           //编辑
|   |   |-- game                         //编辑游戏页
|   |   |   `-- index.js
|   |   |-- render                       //渲染
|   |   |   |-- DragElement.js
|   |   |   `-- index.js
|   |   |-- start                        //编辑开始页
|   |   |   `-- index.js
|   |   `-- subtitle                     //编辑题干部分
|   |       `-- index.js
|   |-- Preview                          //预览
|   |   |-- game                         //预览游戏页
|   |   |   `-- index.js
|   |   |-- start                        //预览开始页
|   |   |   `-- index.js
|   |   `-- subtitle                     //预览题干部分
|   |       `-- index.js
|   |-- index.js
|   `-- packages                         //vue预览编辑页面
|       |-- Editor                       //编辑页面
|       |   |-- index.js
|       |   `-- src
|       |       |-- Edit.vue
|       |       |-- EditEnd.vue
|       |       |-- EditGame.vue
|       |       |-- EditGamePublic.vue
|       |       |-- EditPreview.vue
|       |       `-- EditStart.vue
|       `-- Preview                      //预览页面
|           |-- index.js
|           `-- src
|               `-- Preview.vue
```
#### 项目结构说明

```
项目的结构正如上边展示的图所示，分析此结构，主要有一下几部分组成。
项目的common目录，lib目录，src目录,common目录存放的正是下边两个目录文件所依赖的一个加载组件包，是下方文件的必须目录文件。
src是整个编辑器的源程序文件lib则是将其编译之后的结果，所以二者的目录结构基本一致，此处只对src目录分析。

-- src                                  //原始目录
|   |-- Animate                          //动画库   
|   |-- Editor                           //编辑
|   |-- Preview                          //预览
|   |-- index.js                         //执行文件
|   |-- packages                         //vue预览编辑页面

src的二级目录为Animate，Editor，packages和Preview以及必要的index.js文件。
1.Animate是我们的动效仓库，完整的动效包，具体的动效类型还有使用方法其对应的README文件都有讲解，
2.Editor和Preview文件夹就是我们编辑器的编辑以及预览两种状态，文件夹中的文件对应的就是这两种状态下相关内容的渲染文件(GAME舞台渲染、开始页渲染、标题文字部分渲染)，
3.剩下的package文件夹则是我们常常编辑的右侧操作区内容，对应的操作都在此处执行
```

#### 项目导出方法

```
  内容页引入编辑方法
- UploadAndRenderEle        //编辑页面上传资源后执行
- RenderAllData             //渲染所有元素
- RenderElementByIndex      //根据下标渲染内容页
- StemAudioPause            //暂停本页音频

  引入工具方法
- xesEditorDrag             //拖拽方法
- xesAnimate                //动画库
```

#### 公用方法详解

#### RenderAllData( editStatus, question)
```js
/**
 * 方法说明
 * @method RenderAllData
 * @for Rander
 * @param {Boolean}  editStatus 编辑状态，对应当前舞台的状态变化，编辑的时候调用此方法则应该传入true,否则就是false
 * @param {Object}  question 配置json文件内容，传入的是配置文件内容
 */
RenderAllData( editStatus , question);

* 一般情况来说无需再次调用此方法，只用来生成原始舞台即可
* 此方法会将舞台全部清空，然后按配置文件将资源重新生成至舞台之中，此时的渲染会失去私有方法中添加的事件处理需要重新绑定生成
```

#### RenderElementByIndex( index, question)
```js
/**
 * 方法说明
 * @method RenderElementByIndex
 * @for Rander
 * @param {Number}  index 需要重新渲染的页面索引
 * @param {Object}  question 配置json文件内容，传入的是配置文件内容
 */
RenderElementByIndex( index , question);

* 此方法同重渲染一致，会丢失原绑定事件请谨慎使用
* 将指定索引的舞台内容重渲
```

#### UploadAndRenderEle( index, question)
```js
/**
 * 方法说明
 * @method UploadAndRenderEle
 * @for Rander
 * @param {Number}  index 需要渲染到页面的索引
 * @param {String}  componentName 此次上传组件的组件名称
 * @param {Object}  resource 此次上传的资源对象
 * @param {Object}  question 配置json文件内容，传入的是配置文件内容
 */
UploadAndRenderEle( index, componentName, resource, question);

* 按指定的索引，将资源文件中的资源（图片、精灵序列或者动画）以传入的组件名称命名渲染到舞台中
* 上传的资源会以传入的组件名被命名，对应编辑状态的时候会有编辑组件属性的控制，此时互相关联的唯一凭据就是组件名称，所以组件名称需要保持唯一。
```

#### 补充渲染的关键点
::: tip  
渲染到舞台的资源主要分为其中几类，图片、精灵还有动画，这其中的每一项在舞台中的存在都是凭借组件名
称互相区分识别的，而他们的渲染又是依靠那些属性的呢？

图片的渲染：
    <b>主要是识别其name中是否存在render字样或者时候存在show属性</b>，资源名称中带有render的图片会被识别按属性渲染到舞台上，
其中的render字样是依靠在uploadImage方法中修改render属性附加的，这个看组课常用方法时会说明。<b>同时
配置中也需要有描述图片的基本属性(width,height)</b>，否则渲染的时候也有可能无法看到

精灵的渲染：
    主要是素材还有组件的名称是否完备，<b>资源的素材名中是否含有sprite字段并且存在show字段或者是render字样</b>，满足条件的精
灵图文件才会被渲染到舞台上。

动画的渲染：
    和精灵图的规范一致，渲染之前需要检查资源的素材名中<b>是否含有animate字段并且存在show字段或者是render字样</b>
:::

#### StemAudioPause( index)
```js
/**
 * 方法说明
 * @method StemAudioPause
 * @for Rander
 * @param {Number}  index 暂停音频的页面下标索引
 */
StemAudioPause( index);

* 此方法会将指定下标的舞台题干音频暂停，不影响其他页面的题干播放
```

### 编辑状态中常用的方法

#### uploadImage( data,name, ids,e)
```js
/**
 * 方法说明
 * @method uploadImage
 * @for Private
 * @param {Object}  data 配置文件中对应的资源项
 * @param {String}  name 组件名称
 * @param {Number}  ids 组件序列号(可不填)
 * @param {Object}  e 上传文件的文件实体
 */
 uploadImage(data,name,ids,e){
    let ext = e.target.files[0].name.split(".")[e.target.files[0].name.split(".").length - 1];
    let extArr = ["jpg", "png"];
        if (extArr.indexOf(ext) === -1) {
            this.$message({
                message: "上传类型不符",
                type: "error"
            });
            e.target.value = "";
            return;
        }
        if (e.target.files.length === 0) {
            this.$message({
                message: "上传文件个数不符合",
                type: "warning"
            });
            e.target.value = "";
            return;
        }
        if (e.target.files[0].size / 1024 / 1024 > 1) {
            this.$message({
                message: "上传文件大小在1M以内",
                type: "warning"
            });
            e.target.value = "";
            return;
        }
    this.$http
        .post(
        "/uploadingImage",
        {
            image: e.target.files[0],
            render: false
        },
        {
            headers: { "Content-Type": "multipart/form-data" }
        }
        )
        .then(res => {
            data.name = res.resourceName;
            data.height = res.height;
            data.width = res.width;
            e.target.value = "";
            this.updateResourceData();
    }); 
}

* 上传图片文件的基本方法，此方法中可将传入图片的name判断是否添加render是否需要添加至舞台中渲染
```
#### uploadAnimation( data,name, ids,e)
```js
/**
 * 方法说明
 * @method uploadAnimation
 * @for Private
 * @param {Object}  data 配置文件中对应的资源项
 * @param {String}  name 组件名称
 * @param {Number}  ids 组件序列号(可不填)
 * @param {Object}  e 上传文件的文件实体
 */
 uploadAnimation(data, name, ids, e) {
    if (e.target.files.length === 0 || e.target.files.length !== 3) {
        this.$message({
            message: '上传文件个数不符合',
            type: 'warning',
        });
        return;
    }
    if(!this.verifyAnimationFiles(e.target.files)){
        this.$message({
            message: '上传文件不符合',
            type: 'warning',
        });
        return;
    }
    let object = {};
    let files = Object.values(e.target.files);
    files.forEach((item, index) => {
        object['animation' + (index + 1)] = item;
    });
    this.$http.post('/uploadingAnimation', object, {
        headers: {'Content-Type': 'multipart/form-data'}
    }
    ).then((res) => {
        data.name = res.resourceName;
        e.target.value = '';
    })
}

* 上传动画文件的基本方法，此方法中可将传入动画的name判断是否添加render是否需要添加至舞台中渲染,注意需要额外附加方法verifyAnimationFiles判断当前的动画资源是否正常
```
#### uploadSprite( data, name, e)
```js
/**
 * 方法说明
 * @method uploadSprite
 * @for Private
 * @param {Object}  data 配置文件中对应的资源项
 * @param {String}  name 配置文件中对应的资源项
 * @param {Object}  e 上传文件的文件实体
 */
  uploadSprite(data, name, e) {
    if (e.target.files.length === 0 || e.target.files.length !== 2) {
        this.$message({
            message: '上传文件个数不符合',
            type: 'warning',
        });
        e.target.value = '';
        return;
    }
    if(!this.verifySpriteFiles(e.target.files)){
        this.$message({
            message: '上传文件不符合',
            type: 'warning',
        });
        e.target.value = '';
        return;
    }
    let object = {};
    let files = Object.values(e.target.files);
    files.forEach((item, index) => {
        object['sprite' + (index + 1)] = item;
    });
    console.log(object);
    this.$http.post('/uploadingSprite', object, {
            headers: {'Content-Type': 'multipart/form-data'}
        }
    ).then((res) => {
        data.name = res.resourceName;
        e.target.value = '';
    })
}

* 上传精灵图文件的基本方法，需额外调用verifySpriteFiles验证精灵文件的正确性
```

#### uploadAudio( data,e)
```js
/**
 * 方法说明
 * @method uploadAudio
 * @for Private
 * @param {Object}  data 配置文件中对应的资源项
 * @param {Object}  e 上传文件的文件实体
 */
  uploadAudio(data,e) {
    let ext = e.target.files[0].name.split('.')[e.target.files[0].name.split('.').length-1];
    let extArr = ['mp3','wav'];
    if(extArr.indexOf(ext) === -1){
        this.$message({
            message: '上传类型不符',
            type: 'error'
        });
        return;
    }
    if (e.target.files.length === 0) {
        this.$message({
            message: '上传文件个数不符合',
            type: 'warning',
        });
        return;
    }
    this.$http.post('/uploadingAudio',
        {audio: e.target.files[0]}, {
            headers: {'Content-Type': 'multipart/form-data'}
        }
    ).then((res) => {
        data.audio = res.resourceName
        e.target.value = '';
    })
},

* 上传音频文件的基本方法
```

#### 配置文件配置数据对象
##### 图片
```
"stemImg": {                          --------   配置对象
    "image": {                        --------   配置类别
        "x": 0,                       --------   配置属性
        "y": 0,
        "width": 0,
        "height": 0,
        "name": "",
        "ratio": 0,                   --------   宽高锁定比
        "lock": false,                --------   宽高锁定标志
        "componentName": "stemImage"  --------   配置组件名
    }
}
```
##### 动画
```
"stemAnimate": {                      --------   配置对象
    "animate": {                      --------   配置类别
        "x": 0,                       --------   配置属性
        "y": 0,
        "name": "",
        "loop": false,
        "scale": 1,
        "componentName": "stemImage"  --------   配置组件名
    }
}
```
##### 精灵
```
"stemSprite": {                       --------   配置对象
    "sprite": {                       --------   配置类别
        "x": 0,                       --------   配置属性
        "y": 0,
        "name": "",
        "loop": false,
        "scale": 1,
        "componentName": "stemImage"  --------   配置组件名
    }
}
```
* 文件的配置中，这个配置对象很重要，配置的时候类别和对象要分开，不能直接取消配置对象这一层，否则遍历配置的时候会无法正确获取资源内容 
* <b>配置文件的对象组件名称很重要</b>，直接关系到舞台中的对象展示以及编辑能否成功