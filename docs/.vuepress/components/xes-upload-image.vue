<template>
    <div>
        <div class="game-icon">
            <span></span>
        </div>
        <div class="upload">
            <div class="img-box">
                <img  alt="" width="131" height="96">
            </div>
            <div class="upload-btn">
                <div class="upload-btn-file">
                    <span>更改图片</span>
                    <input type="file" @change="">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
  export default {
    data() {
      return {
        
      }
    }
  }
</script>
<style scoped>
.upload {
    width: 20rem;
    height: 7rem;
    margin: 0;
    overflow: hidden;
    background:#343434;
    padding: 5px;
}
.file-title{
    float: left;
    width: 28%;
    color: #fff;
    height: 32px;
    line-height: 32px;
}
.img-box {
    width: 60%;
    float: left;
    height: 100px;
    text-align: center;
    border: 2px dashed #ccc;
    box-sizing: border-box;
    text-align: center;
    background: #666666;
    line-height: 96px;
    overflow: hidden;
}
.img-box img {
    height: 80px;
    width: auto;
    vertical-align: middle;
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
.upload-btn-file span{
    font-size: 14px;
}
.upload-btn-file input{
    width: 80px;
    height: 30px;
    opacity: 0;
    position: absolute;
    left: 0;
    top: 0;
    cursor: pointer;
}
</style>
