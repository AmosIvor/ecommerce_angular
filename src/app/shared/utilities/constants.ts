export const PATH = {
  home: '/',
  login: '/login',
  register: '/register',
  logout: '/logout',
  productList: '/products',
  productDetail: '/:nameId',
  cart: '/cart',
  payment: '/payment',
  user: '/user',
  profile: '/user/profile',
  address: '/user/address',
  passwordChange: '/user/change-password',
  voucher: '/user/voucher',
  purchaseHistory: '/user/purchase-history',
  productRating: '/user/rating',
  purchaseHistoryDetail: '/user/purchase-history/order/:nameId'
} as const
