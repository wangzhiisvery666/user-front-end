export default [
  {
    path: '/user',
    layout: false,
    // access:"isVIP"  加上这个就代表登录和注册页面只有vip才能访问
    routes: [
      { name: '登录', path: '/user/login', component: './user/Login' },
      { name: '注册', path: '/user/register', component: './user/register' },
      { component: './404' },
    ],
  },
  { path: '/welcome',
    name: '欢迎',
    icon: 'smile',
    component: './Welcome'
  },
  {
    path: '/admin',
    name: '管理页',
    icon: 'crown',
    //这个可以控制属性
    access: 'canAdmin',
    component:"./Admin",
    routes: [
      { path: '/admin/user-manage', name: '管理页面', icon: 'smile', component: './Admin/userManage' },
      { component: './404' },
    ],
  },
  { name: '查询表格', icon: 'table', path: '/list', component: './TableList' },
  { path: '/', redirect: '/welcome' },
  { component: './404' },
];
