export default [
  { cmd: 'undo', icon: 'undo', desc: '撤销' },
  { cmd: 'redo', icon: 'redo', desc: '重做' },
  { cmd: 'backColor', icon: 'setColor', desc: '背景颜色' },
  { cmd: 'bold', icon: 'bold', desc: '加粗' },
  { cmd: 'italic', icon: 'italic', desc: '斜体' },
  { cmd: 'delete', icon: 'delete', desc: '删除选中部分' },
  { cmd: 'fontSize', icon: 'fontSize', desc: '字体大小' },
  { cmd: 'cut', icon: 'cut', desc: '剪切' },
  { cmd: 'formatBlock',
    icon: 'setColor',
    desc: '标题',
    children: [
      { text: 'H1', act: 'H1' },
      { text: 'H2', act: 'H2' },
      { text: 'H3', act: 'H3' },
      { text: 'H4', act: 'H4' },
      { text: 'H5', act: 'H5' },
      { text: 'H6', act: 'H6' },
      { text: 'H7', act: 'H7' }
    ]
  },
  { cmd: 'justifyCenter', icon: 'align-center', desc: '居中' },
  { cmd: 'justifyLeft', icon: 'align-left', desc: '左对齐' },
  { cmd: 'justifyRight', icon: 'align-right', desc: '右对齐' },
  { cmd: 'selectAll', icon: 'select-all', desc: '全选' },
  { cmd: 'insertOrderedList', icon: 'order', desc: '有序列表' },
  { cmd: 'insertUnorderedList', icon: 'unOrder', desc: '无序列表' },
  { cmd: 'createLink', icon: 'create-link', desc: '链接' },
  { cmd: 'insertImage', icon: 'insert-img', desc: '图片' },
  { cmd: 'underline', icon: 'underline', desc: '下划线' },
  { cmd: 'strikeThrough', icon: 'strikeThrough', desc: '删除线' }
]
