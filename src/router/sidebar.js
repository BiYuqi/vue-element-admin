import Main from '@/views/Main'
const Dashboard = () => import('@/views/Dashboard')
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
        component: Dashboard
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
        component: () => import('@/views/IconPage/index.vue')
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
        component: () => import('@/views/ComponentsDemo/markdown.vue')
      },
      {
        path: 'avator-upload',
        name: 'avator_upload',
        meta: {
          title: 'avatarUpload'
        },
        component: () => import('@/views/ComponentsDemo/avatorUpload.vue')
      },
      {
        path: 'sticky',
        name: 'sticky_index',
        meta: {
          title: 'sticky'
        },
        component: () => import('@/views/ComponentsDemo/sticky-demo.vue')
      },
      {
        path: 'little',
        name: 'little_index',
        meta: {
          title: 'componentMixin'
        },
        component: () => import('@/views/ComponentsDemo/little-demo.vue')
      },
      {
        path: 'back-to-top',
        name: 'back_to_top',
        meta: {
          title: 'backToTop'
        },
        component: () => import('@/views/ComponentsDemo/backToTop.vue')
      },
      {
        path: 'code-edit',
        name: 'code-edit',
        meta: {
          title: 'codeEdit'
        },
        component: () => import('@/views/ComponentsDemo/codeEdit.vue')
      },
      {
        path: 'arrow-select',
        name: 'arrow-select',
        meta: {
          title: 'arrowSelect'
        },
        component: () => import('@/views/ComponentsDemo/arrowSelect.vue')
      },
      {
        path: 'rich-editor',
        name: 'rich-editor',
        meta: {
          title: 'richEditor'
        },
        component: () => import('@/views/ComponentsDemo/richEditor.vue')
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
        component: () => import('@/views/FormPage/createForm.vue')
      },
      {
        path: 'form-editor',
        name: 'form_editor',
        meta: {
          title: 'editForm'
        },
        component: () => import('@/views/FormPage/editForm.vue')
      },
      {
        path: 'form-update',
        name: 'form_update',
        meta: {
          title: 'listenForm'
        },
        component: () => import('@/views/FormPage/formUpdate.vue')
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
        component: () => import('@/views/RouterPage/index-one.vue')
      },
      {
        path: 'send',
        name: 'send_index',
        meta: {
          title: 'paramRoute'
        },
        component: () => import('@/views/RouterPage/index-two.vue')
      }
    ]
  },
  {
    path: '/composite', // 综合实例
    name: 'composite',
    icon: 'complex',
    title: 'composite',
    component: Main,
    children: [
      {
        path: 'article-list',
        name: 'article_index',
        meta: {
          title: 'articleList'
        },
        component: () => import('@/views/ArticleManage/ArticleList/index.vue')
      },
      {
        path: 'public-article',
        name: 'public_index',
        meta: {
          title: 'publicArticle'
        },
        component: () => import('@/views/ArticleManage/PublicArticle/index.vue')
      },
      {
        path: 'table',
        name: 'table_index',
        meta: {
          title: 'table'
        },
        component: () => import('@/views/CompositeDemo/table/index.vue')
      },
      {
        path: 'tab',
        name: 'tab_index',
        meta: {
          title: 'tab'
        },
        component: () => import('@/views/CompositeDemo/tab/index.vue')
      }
    ]
  },
  {
    path: '/userinfo',
    name: 'user',
    icon: 'user',
    component: Main,
    title: 'manageInfo',
    children: [
      {
        path: 'userinfo',
        name: 'user_info',
        meta: {
          title: 'userInfo',
          access: ['admin']
        },
        component: () => import('@/views/userInfo/setInfo.vue')
      },
      {
        path: 'editinfo',
        name: 'edit_info',
        meta: {
          title: 'editInfo',
          access: ['admin']
        },
        component: () => import('@/views/userInfo/editInfo.vue')
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
        component: () => import('@/views/SettingPage/setting.vue')
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
        component: () => import('@/views/ComponentsDemo/bugPage.vue')
      }
    ]
  }
]
