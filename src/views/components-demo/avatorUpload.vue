<template>
  <div class="avator-upload components-wrap">
    <com-intro
      leftTxt="this is based on"
      url="https://github.com/dai-siki/vue-image-crop-upload"
      urlTxt="A beautiful vue component for image cropping and uploading."
      rigthTxt="(vue图片剪裁上传组件IE10+)"></com-intro>
    <div class="avator-test">
      <img :src="imgSource" alt="">
      <el-button class="btn-upload" type="primary" @click="toggleShow">Change Photo</el-button>
    </div>
    <my-upload
        @crop-success="cropSuccess"
        @crop-upload-success="cropUploadSuccess"
        @crop-upload-fail="cropUploadFail"
        v-model="show"
        :width="300"
        :height="300"
        langType="en"
        :langExt="langExt"
        withCredentials>
    </my-upload>
  </div>
</template>

<script>
import ComIntro from '@/views/components-intro/index'
import myUpload from 'vue-image-crop-upload'
// 官方示例
// https://github.com/dai-siki/vue-image-crop-upload#%E7%A4%BA%E4%BE%8B
export default {
  components: {
    ComIntro,
    myUpload
  },
  data () {
    return {
      show: false,
      imgSource: 'https://avatars2.githubusercontent.com/u/20992106?s=460&v=4',
      langExt: { // 没有增加上传地址，所以没有上传进度
        en: {
          hint: 'Click or drag the file here to upload',
          loading: 'Uploading…',
          noSupported: 'Browser is not supported, please use IE10+ or other browsers',
          success: 'Upload success',
          fail: 'Upload failed',
          preview: 'Preview',
          btn: {
            off: 'Cancel',
            close: 'Close',
            back: 'Back',
            save: 'Save'
          },
          error: {
            onlyImg: 'Image only',
            outOfSize: 'Image exceeds size limit: ',
            lowestPx: 'Image\'s size is too low. Expected at least: '
          }
        }
      }
    }
  },
  methods: {
    toggleShow () {
      this.show = !this.show
    },
    cropSuccess (imgDataUrl, field) {
      // console.log(imgDataUrl, field)
      this.imgSource = imgDataUrl
    },
    cropUploadSuccess (jsonData, field) {
      // console.log(jsonData)
    },
    cropUploadFail (status, field) {
      // console.log(status)
    }
  }
}
</script>

<style lang="scss">
.avator-test{
  img{
    width: 180px;
    height: 180px;
    border-radius: 50%;
    vertical-align: bottom;
  }
  .btn-upload{
    vertical-align: middle;
    margin-left: 30px;
  }
}
</style>
