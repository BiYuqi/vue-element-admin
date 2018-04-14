import Main from '@/views/Main'
// 侧边栏路由一般都放在这里 需要权限校验
export const baseRoute = [
  {
    path: '',
    component: Main,
    title: '首页',
    icon: 'dashboard',
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'dashboard_index',
        meta: {
          title: '首页'
        },
        component: () => import('@/views/dashboard/dashboard.vue')
      }
    ]
  },
  {
    path: '/icon',
    title: '图标',
    name: 'icon',
    icon: 'icon',
    component: Main,
    children: [
      {
        path: 'icon',
        name: 'icon_index',
        meta: {
          title: '图标'
        },
        component: () => import('@/views/icon-page/index.vue')
      }
    ]
  },
  {
    path: '/compoents',
    name: 'compoents',
    component: Main,
    title: '组件库',
    icon: 'component',
    children: [
      {
        path: 'markdown',
        name: 'markdown',
        meta: {
          title: 'Markdown',
          access: ['admin']
        },
        component: () => import('@/views/components-demo/markdown.vue')
      },
      {
        path: 'json-editor',
        name: 'json_editor',
        meta: {
          title: 'JSON编辑器',
          access: ['admin']
        },
        component: () => import('@/views/components-demo/jsonEditor.vue')
      },
      {
        path: 'avator-upload',
        name: 'avator_upload',
        meta: {
          title: '头像上传'
        },
        component: () => import('@/views/components-demo/avatorUpload.vue')
      },
      {
        path: 'sticky',
        name: 'sticky_index',
        meta: {
          title: 'Sticky'
        },
        component: () => import('@/views/components-demo/sticky-demo.vue')
      },
      {
        path: 'little',
        name: 'little_index',
        meta: {
          title: '小组件'
        },
        component: () => import('@/views/components-demo/little-demo.vue')
      },
      {
        path: 'back-to-top',
        name: 'back_to_top',
        meta: {
          title: '返回顶部'
        },
        component: () => import('@/views/components-demo/backToTop.vue')
      }
    ]
  },
  {
    path: '/form',
    title: '表单',
    name: 'form',
    icon: 'form',
    component: Main,
    children: [
      {
        path: 'form-creat',
        name: 'form_creat',
        meta: {
          title: '表单创建'
        },
        component: () => import('@/views/form-page/createForm.vue')
      },
      {
        path: 'form-editor',
        name: 'form_editor',
        meta: {
          title: '编辑表单'
        },
        component: () => import('@/views/form-page/editForm.vue')
      },
      {
        path: 'form-update',
        name: 'form_update',
        meta: {
          title: '表单监听'
        },
        component: () => import('@/views/form-page/formUpdate.vue')
      }
    ]
  },
  {
    path: '/advanced',
    name: 'advanced',
    icon: 'example',
    title: '高级路由',
    component: Main,
    children: [
      {
        path: 'active',
        name: 'active_index',
        meta: {
          title: '动态路由'
        },
        component: () => import('@/views/router-page/index-one.vue')
      },
      {
        path: 'send',
        name: 'send_index',
        meta: {
          title: '带参页面'
        },
        component: () => import('@/views/router-page/index-two.vue')
      }
    ]
  },
  {
    path: '/setting',
    name: 'set',
    icon: 'qq',
    component: Main,
    children: [
      {
        path: 'setting',
        name: 'setting_index',
        meta: {
          title: '配置',
          access: ['admin']
        },
        component: () => import('@/views/components-demo/setting.vue')
      }
    ]
  },
  {
    path: '/test',
    title: '小工具',
    name: 'test',
    icon: 'tab',
    component: Main,
    children: [
      {
        path: 'css',
        name: 'css_index',
        meta: {
          title: 'CSS三角制作'
        },
        component: () => import('@/views/components-demo/cssSet.vue')
      }
    ]
  },
  {
    path: '/bug',
    name: 'bug',
    icon: 'bug',
    component: Main,
    children: [
      {
        path: 'bug',
        name: 'bug_index',
        meta: {
          title: '错误日志',
          access: ['admin']
        },
        component: () => import('@/views/components-demo/bugPage.vue')
      }
    ]
  }
]
