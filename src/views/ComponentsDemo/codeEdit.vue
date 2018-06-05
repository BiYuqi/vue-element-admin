<template>
  <div class="code-editor-demo">
    <div class="code-wrap">
      <el-card class="box-card code-left">
        <div slot="header" class="clearfix">
          <span>选项设置</span>
        </div>
        <el-form :model="selects" label-width="100px">
          <el-form-item label="Language">
            <el-select v-model="selects.mode">
              <el-option v-for="item in modes" :value="item.name" :key="item.name" :label="item.caption"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="Themes">
            <el-select v-model="selects.theme">
              <el-option v-for="item in themes" :value="item.name" :key="item.name" :label="item.caption"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="Font Size">
            <el-select v-model="selects.fontSize">
              <el-option v-for="item in fontsize" :value="item" :key="item.name" :label="item"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="Highlight Line">
            <el-radio-group v-model="selects.highlightline">
              <el-radio :label="true">YES</el-radio>
              <el-radio :label="false">NO</el-radio>
            </el-radio-group>
          </el-form-item>
        </el-form>
      </el-card>
      <el-card class="box-card code-right">
        <code-edit
          @code-change="codeChange"
          :mode="selects.mode"
          :theme="selects.theme"
          :fontSize="selects.fontSize"
          :highlightline="selects.highlightline"
          height="100%">
        </code-edit>
        <el-button type="default" class="copy-code" v-clipboard="currentCode">Copy Code</el-button>
      </el-card>
    </div>
  </div>
</template>

<script>
import CodeEdit from '@/components/CodeEdit/index'
import * as brace from 'brace'
import 'brace/ext/modelist'
import 'brace/ext/themelist'
const modelist = brace.acequire('ace/ext/modelist')
const themelist = brace.acequire('ace/ext/themelist')
export default {
  components: {
    CodeEdit
  },
  data () {
    return {
      code: '',
      modes: modelist.modes,
      themes: themelist.themes,
      fontsize: ['12px', '13px', '14px', '16px', '18px', '20px', '22px', '24px'],
      codefolding: ['manual', 'markbegin', 'markbeginend'],
      softwrap: ['off', '50', 'free'],
      selects: {
        mode: 'javascript',
        theme: 'chrome',
        fontSize: '14px',
        highlightline: true
      },
      currentCode: [
        '/**',
        '* 日期格式化',
        '* @param {type} String HHMMDDhhmmss  至于中间用什么请自便',
        '* @param {timer} Number',
        '* HH年MM月DD月 hh:mm:ss => 2018年4月12日 22:09:30',
        '*/',
        'export const AGE = 19'
      ].join('\n')
    }
  },
  methods: {
    codeChange (val) {
      this.currentCode = val
    }
  },
  mounted () {
    // console.log(this.themes)
  }
}
</script>

<style lang="scss">
.code-editor-demo{
  height: 100%;
  padding: 30px;
  .code-wrap{
    overflow: hidden;
    height: 100%;
    position: relative;
  }
  .code-left{
    float: left;
    width: 30%;
    border: 1px solid #eee;
  }
  .code-right{
    float: right;
    width: 68%;
    height: 100%;
    .el-card__body{
      padding: 10px;
      height: 100%;
    }
  }
  .copy-code{
    position: absolute;
    top: 10px;
    right: 0;
    z-index: 999;
  }
}
</style>
