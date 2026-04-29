/**
 * @see https://umijs.org/zh-CN/plugins/plugin-access
 * */
export default function access(initialState: { currentUser?: API.CurrentUser } | undefined) {
  const { currentUser } = initialState ?? {};
  // console.log(currentUser)
  return {
    luru: currentUser && currentUser.access === '100',
    shenpi: currentUser && currentUser.access === '010',
    guanli: currentUser && currentUser.access === '001',
    luruandguanli: currentUser && currentUser.access === '101',
    luruandshenpi: currentUser && currentUser.access === '110',
    shenpiandguanli: currentUser && currentUser.access === '011',
    luruandshenpiandguanli: currentUser && currentUser.access === '111',
    zhuanban: currentUser && currentUser.access === 'zhuanban',
    // canAdmin: currentUser && currentUser.access === 'admin',
    // canYys: currentUser && currentUser.access === 'yys',
    // canSpz: currentUser && currentUser.access === 'spz',
  };
}
