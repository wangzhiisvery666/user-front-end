/**
 * @see https://umijs.org/zh-CN/plugins/plugin-access
 * */
//配置访问权限
export default function access(initialState: { currentUser?: API.CurrentUser } | undefined) {
  const { currentUser } = initialState ?? {};
  return {
    canAdmin: currentUser && currentUser.permission === 1,
  };
}
