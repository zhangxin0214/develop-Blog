---
title: 制作resource.json小工具
---
# 制作resource.json小工具 
---

# 简介
可以自动的快捷的依据配置内容生成resource.json

# 代码
```js
let fs = require('fs')
let Path = require('path')

function readDirSync(path, fn) {
    var pa = fs.readdirSync(path);
    pa.forEach(function (ele, index) {
        var info = fs.statSync(path + "/" + ele)
        if (info.isDirectory()) {
            readDirSync(path + "\\" + ele, fn);
        } else {
            fn && fn(path, ele);
        }
    })
}

function resolvePath(path1 = "./static/gameImages/", canLoad = ['png', 'jpg'], font = "image") {
    let path2 = Path.resolve(path1);
    return new Promise((resolve, reject) => {
        let temp = [];
        readDirSync(path2, (path, ele) => {
            let str = ele.split(".");
            let name = str[0];
            let type = str[1];
            if (canLoad.includes(type)) {
                let truePath = path.split(path2)[1];
                let arrPath = truePath.split("\\");
                arrPath.shift();
                let Font = font + (arrPath.length === 0 ? "" : "-" + arrPath.join("-"));
                let realPath =
                temp.push(JSON.stringify({
                    path: path1 + (arrPath.length === 0 ? "" : arrPath.join("/")+"/" ) + ele,
                    key: Font + "_" + name,
                    edit: false
                }))
            }
        });
        resolve(temp);
    });
}

let arrResource = [
    {
        baseSrc: "./static/images/",
        type: ['png', 'jpg'],
        prefix: "image"
    },
    {
        baseSrc: "./static/audios/",
        type: ['mp3'],
        prefix: "audio"
    },
    {
        baseSrc: "./static/animation/",
        type: ['json'],
        prefix: "animation"
    },
    {
        baseSrc: "./static/pub/",
        type: ['png', 'jpg'/*, 'mp3'*/],
        prefix: "pub"
    }
];

function resourcePromise(paraArr) {
    let FinialArr = [];
    let count = paraArr.length;
    let A;
    let B;

    function onFinish(arr) {
        FinialArr.push.apply(FinialArr, arr);
        count--;
        if (count === 0) {
            A(FinialArr);
        }
    }

    for (let i = 0; i < count; i++) {
        resolvePath(paraArr[i].baseSrc, paraArr[i].type, paraArr[i].prefix).then((arr) => {
            onFinish(arr);
        });
    }
    return new Promise((a, b) => {
        A = a;
    });
}

resourcePromise(arrResource).then((arr) => {
    if (fs.existsSync("./static/resource.json")) {
        fs.unlinkSync("./static/resource.json")
    }
    fs.appendFile('./static/resource.json', '[' + arr + ']', (e, v) => {
        console.log(e)
    });
});
```
# 配置内容
修改代码中的arrResource数组

baseSrc配置资源所在位置

type配置资源后缀名

prefix配置资源名称前缀

生成的资源名命名规范为

prefix+路径+文件名
# example
```cmd
  //将代码保存为makeJson.js文件放置于根目录
  node makeJson.js
```