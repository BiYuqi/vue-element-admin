import Main from '@/views/Main'
// 非侧边栏路由一般都放在这里
export default [
  {
    path: '/order',
    component: Main,
    icon: 'dashboard',
    children: [
      {
        path: 'order/:id',
        name: 'order_index',
        meta: {
          title: '订单详情'
        },
        component: () => import('@/views/router-demo/order.vue')
      }
    ]
  },
  {
    path: '/shop',
    icon: 'icon',
    component: Main,
    children: [
      {
        path: 'shop',
        name: 'shop_index',
        meta: {
          title: '商店详情'
        },
        component: () => import('@/views/router-demo/shop.vue')
      }
    ]
  }
]
