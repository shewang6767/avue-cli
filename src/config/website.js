/**
 * 全局配置文件
 */
export default {
  title: "Avue",
  logo: "用户",
  key: 'avue',//配置主键,目前用于存储
  indexTitle: '用户中心管理平台',
  tokenTime: 6000,//token过期时间
  Authorization: 'Authorization',
  //http的status默认放行不才用统一处理的,
  statusWhiteList: [400],
  //配置首页不可关闭
  setting: {
    sidebar: 'vertical',
    tag: true,
    debug: true,
    collapse: true,
    search: true,
    lock: true,
    screenshot: true,
    fullscren: true,
    theme: true,
    menu: true
  },
  fistPage: {
    name: "系统导航",
    path: "/nav-page/index"
  },
  //配置菜单的属性
  menu: {
    iconDefault: 'icon-caidan',
    label: 'label',
    path: 'path',
    icon: 'icon',
    children: 'children',
    query: 'query',
    href: 'href',
    meta: 'meta'
  }
}