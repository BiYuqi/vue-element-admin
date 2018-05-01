import Main from '@/views/Main'
// 侧边栏路由一般都放在这里 需要权限校验
export const baseRoute = [
  {
    path: '',
    component: Main,
    title: 'dashboard',
    icon: 'dashboard',
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'dashboard_index',
        meta: {
          title: 'dashboard'
        },
        component: () => import('@/views/dashboard/dashboard.vue')
      }
    ]
  },
  {
    path: '/icon',
    title: 'icons',
    name: 'icon',
    icon: 'icon',
    component: Main,
    children: [
      {
        path: 'icon',
        name: 'icon_index',
        meta: {
          title: 'icons'
        },
        component: () => import('@/views/icon-page/index.vue')
      }
    ]
  },
  {
    path: '/compoents', // 组件库
    name: 'compoents',
    component: Main,
    title: 'components',
    icon: 'component',
    children: [
      {
        path: 'markdown',
        name: 'markdown',
        meta: {
          title: 'markdown',
          access: ['admin']
        },
        component: () => import('@/views/components-demo/markdown.vue')
      },
      {
        path: 'json-editor',
        name: 'json_editor',
        meta: {
          title: 'jsonEditor',
          access: ['admin']
        },
        component: () => import('@/views/components-demo/jsonEditor.vue')
      },
      {
        path: 'avator-upload',
        name: 'avator_upload',
        meta: {
          title: 'avatarUpload'
        },
        component: () => import('@/views/components-demo/avatorUpload.vue')
      },
      {
        path: 'sticky',
        name: 'sticky_index',
        meta: {
          title: 'sticky'
        },
        component: () => import('@/views/components-demo/sticky-demo.vue')
      },
      {
        path: 'little',
        name: 'little_index',
        meta: {
          title: 'componentMixin'
        },
        component: () => import('@/views/components-demo/little-demo.vue')
      },
      {
        path: 'back-to-top',
        name: 'back_to_top',
        meta: {
          title: 'backToTop'
        },
        component: () => import('@/views/components-demo/backToTop.vue')
      },
      {
        path: 'code-edit',
        name: 'code-edit',
        meta: {
          title: 'codeEdit'
        },
        component: () => import('@/views/components-demo/codeEdit.vue')
      }
    ]
  },
  {
    path: '/form', // 表单
    title: 'form',
    name: 'form',
    icon: 'form',
    component: Main,
    children: [
      {
        path: 'form-creat',
        name: 'form_creat',
        meta: {
          title: 'createForm'
        },
        component: () => import('@/views/form-page/createForm.vue')
      },
      {
        path: 'form-editor',
        name: 'form_editor',
        meta: {
          title: 'editForm'
        },
        component: () => import('@/views/form-page/editForm.vue')
      },
      {
        path: 'form-update',
        name: 'form_update',
        meta: {
          title: 'listenForm'
        },
        component: () => import('@/views/form-page/formUpdate.vue')
      }
    ]
  },
  {
    path: '/advanced', // 高级路由
    name: 'advanced',
    icon: 'example',
    title: 'highRoute',
    component: Main,
    children: [
      {
        path: 'active',
        name: 'active_index',
        meta: {
          title: 'dynamicRoute'
        },
        component: () => import('@/views/router-page/index-one.vue')
      },
      {
        path: 'send',
        name: 'send_index',
        meta: {
          title: 'paramRoute'
        },
        component: () => import('@/views/router-page/index-two.vue')
      }
    ]
  },
  {
    path: '/composite', // 综合实例
    name: 'composite',
    icon: 'example',
    title: 'composite',
    component: Main,
    children: [
      {
        path: 'table',
        name: 'table_index',
        meta: {
          title: 'table'
        },
        component: () => import('@/views/composite-demo/table/index.vue')
      },
      {
        path: 'tab',
        name: 'tab_index',
        meta: {
          title: 'tab'
        },
        component: () => import('@/views/composite-demo/tab/index.vue')
      }
    ]
  },
  {
    path: '/setting',
    name: 'set',
    icon: 'setting',
    component: Main,
    title: 'setting',
    children: [
      {
        path: 'setting',
        name: 'setting_index',
        meta: {
          title: 'setting',
          access: ['admin']
        },
        component: () => import('@/views/components-demo/setting.vue')
      }
    ]
  },
  {
    path: '/test',
    title: '小工具', // 后期再翻译
    name: 'test',
    icon: 'tab',
    component: Main,
    children: [
      {
        path: 'css',
        name: 'css_index',
        meta: {
          title: 'cssAngle'
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
    title: 'bug',
    children: [
      {
        path: 'bug',
        name: 'bug_index',
        meta: {
          title: 'errorBug',
          access: ['admin']
        },
        component: () => import('@/views/components-demo/bugPage.vue')
      }
    ]
  }
]
