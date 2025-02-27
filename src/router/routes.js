const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/', component: () => import('pages/IndexPage.vue') },
      { path: '/categories', component: () => import('pages/CategoriesPage.vue') },
      { path: '/products', component: () => import('pages/ProductsPage.vue') },
      { path: '/buy', component: () => import('pages/BuyPage.vue') },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
]

export default routes
