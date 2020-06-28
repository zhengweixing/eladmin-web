import router from './routers'
import store from '@/store'
import Config from '@/settings'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css'// progress bar style
import { getToken } from '@/utils/auth' // getToken from cookie
import { get_classes_navigation } from '@/api/iotapi'
import { filterAsyncRouter } from '@/store/modules/permission'

NProgress.configure({ showSpinner: false })// NProgress Configuration

const whiteList = ['/login']// no redirect whitelist

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title + ' - ' + Config.title
  }
  NProgress.start()
  if (getToken()) {
    // 已登录且要跳转的页面是登录页
    if (to.path === '/login') {
      next({ path: '/' })
      NProgress.done()
    } else {
      if (store.getters.roles.length === 0) { // 判断当前用户是否已拉取完user_info信息
        store.dispatch('GetInfo').then(res => { // 拉取user_info
          // 动态路由，拉取菜单
          loadMenus(next, to)
        }).catch((err) => {
          console.log(err)
          store.dispatch('LogOut').then(() => {
            location.reload() // 为了重新实例化vue-router对象 避免bug
          })
        })
        // 登录时未拉取 菜单，在此处拉取
      } else if (store.getters.loadMenus) {
        // 修改成false，防止死循环
        store.dispatch('updateLoadMenus').then(res => {
        })
        loadMenus(next, to)
      } else {
        next()
      }
    }
  } else {
    /* has no token*/
    if (whiteList.indexOf(to.path) !== -1) { // 在免登录白名单，直接进入
      next()
    } else {
      next(`/login?redirect=${to.path}`) // 否则全部重定向到登录页
      NProgress.done()
    }
  }
})

export const loadMenus = (next, to) => {
  console.log(1111)
  get_classes_navigation().then(res => {
    // const { results } = res
    const results = [{
      'name': '系统管理',
      'path': '/system',
      'hidden': false,
      'redirect': 'noredirect',
      'component': 'Layout',
      'alwaysShow': true,
      'meta': { 'title': '系统管理', 'icon': 'system', 'noCache': true },
      'children': [{
        'name': 'User',
        'path': 'user',
        'hidden': false,
        'component': 'system/user/index',
        'meta': { 'title': '用户管理', 'icon': 'peoples', 'noCache': true }
      }, {
        'name': 'Role',
        'path': 'role',
        'hidden': false,
        'component': 'system/role/index',
        'meta': { 'title': '角色管理', 'icon': 'role', 'noCache': true }
      }, {
        'name': 'Menu',
        'path': 'menu',
        'hidden': false,
        'component': 'system/menu/index',
        'meta': { 'title': '菜单管理', 'icon': 'menu', 'noCache': true }
      }, {
        'name': 'Dept',
        'path': 'dept',
        'hidden': false,
        'component': 'system/dept/index',
        'meta': { 'title': '部门管理', 'icon': 'dept', 'noCache': true }
      }, {
        'name': 'Job',
        'path': 'job',
        'hidden': false,
        'component': 'system/job/index',
        'meta': { 'title': '岗位管理', 'icon': 'Steve-Jobs', 'noCache': true }
      }, {
        'name': 'Dict',
        'path': 'dict',
        'hidden': false,
        'component': 'system/dict/index',
        'meta': { 'title': '字典管理', 'icon': 'dictionary', 'noCache': true }
      }, {
        'name': 'Timing',
        'path': 'timing',
        'hidden': false,
        'component': 'system/timing/index',
        'meta': { 'title': '任务调度', 'icon': 'timing', 'noCache': true }
      }]
    }, {
      'name': '系统监控',
      'path': '/monitor',
      'hidden': false,
      'redirect': 'noredirect',
      'component': 'Layout',
      'alwaysShow': true,
      'meta': { 'title': '系统监控', 'icon': 'monitor', 'noCache': true },
      'children': [{
        'name': 'OnlineUser',
        'path': 'online',
        'hidden': false,
        'component': 'monitor/online/index',
        'meta': { 'title': '在线用户', 'icon': 'Steve-Jobs', 'noCache': true }
      }, {
        'name': 'Log',
        'path': 'logs',
        'hidden': false,
        'component': 'monitor/log/index',
        'meta': { 'title': '操作日志', 'icon': 'log', 'noCache': true }
      }, {
        'name': 'ErrorLog',
        'path': 'errorLog',
        'hidden': false,
        'component': 'monitor/log/errorLog',
        'meta': { 'title': '异常日志', 'icon': 'error', 'noCache': true }
      }, {
        'name': 'ServerMonitor',
        'path': 'server',
        'hidden': false,
        'component': 'monitor/server/index',
        'meta': { 'title': '服务监控', 'icon': 'codeConsole', 'noCache': true }
      }, {
        'name': 'Sql',
        'path': 'druid',
        'hidden': false,
        'component': 'monitor/sql/index',
        'meta': { 'title': 'SQL监控', 'icon': 'sqlMonitor', 'noCache': true }
      }]
    }, {
      'name': 'Mnt',
      'path': '/mnt',
      'hidden': false,
      'redirect': 'noredirect',
      'component': 'Layout',
      'alwaysShow': true,
      'meta': { 'title': '运维管理', 'icon': 'mnt', 'noCache': true },
      'children': [{
        'name': 'ServerDeploy',
        'path': 'mnt/serverDeploy',
        'hidden': false,
        'component': 'mnt/server/index',
        'meta': { 'title': '服务器', 'icon': 'server', 'noCache': true }
      }, {
        'name': 'App',
        'path': 'mnt/app',
        'hidden': false,
        'component': 'mnt/app/index',
        'meta': { 'title': '应用管理', 'icon': 'app', 'noCache': true }
      }, {
        'name': 'Deploy',
        'path': 'mnt/deploy',
        'hidden': false,
        'component': 'mnt/deploy/index',
        'meta': { 'title': '部署管理', 'icon': 'deploy', 'noCache': true }
      }, {
        'name': 'DeployHistory',
        'path': 'mnt/deployHistory',
        'hidden': false,
        'component': 'mnt/deployHistory/index',
        'meta': { 'title': '部署备份', 'icon': 'backup', 'noCache': true }
      }, {
        'name': 'Database',
        'path': 'mnt/database',
        'hidden': false,
        'component': 'mnt/database/index',
        'meta': { 'title': '数据库管理', 'icon': 'database', 'noCache': true }
      }]
    }, {
      'name': '系统工具',
      'path': '/sys-tools',
      'hidden': false,
      'redirect': 'noredirect',
      'component': 'Layout',
      'alwaysShow': true,
      'meta': { 'title': '系统工具', 'icon': 'sys-tools', 'noCache': true },
      'children': [{
        'name': 'GeneratorIndex',
        'path': 'generator',
        'hidden': false,
        'component': 'generator/index',
        'meta': { 'title': '代码生成', 'icon': 'dev', 'noCache': false }
      }, {
        'name': 'Pictures',
        'path': 'pictures',
        'hidden': false,
        'component': 'tools/picture/index',
        'meta': { 'title': '图床管理', 'icon': 'image', 'noCache': true }
      }, {
        'name': 'GeneratorConfig',
        'path': 'generator/config/:tableName',
        'hidden': true,
        'component': 'generator/config',
        'meta': { 'title': '生成配置', 'icon': 'dev', 'noCache': false }
      }, {
        'name': 'Storage',
        'path': 'storage',
        'hidden': false,
        'component': 'tools/storage/index',
        'meta': { 'title': '存储管理', 'icon': 'qiniu', 'noCache': true }
      }, {
        'name': 'Email',
        'path': 'email',
        'hidden': false,
        'component': 'tools/email/index',
        'meta': { 'title': '邮件工具', 'icon': 'email', 'noCache': true }
      }, {
        'name': 'Swagger',
        'path': 'swagger2',
        'hidden': false,
        'component': 'tools/swagger/index',
        'meta': { 'title': '接口文档', 'icon': 'swagger', 'noCache': true }
      }, {
        'name': 'AliPay',
        'path': 'aliPay',
        'hidden': false,
        'component': 'tools/aliPay/index',
        'meta': { 'title': '支付宝工具', 'icon': 'alipay', 'noCache': true }
      }, {
        'name': 'Preview',
        'path': 'generator/preview/:tableName',
        'hidden': true,
        'component': 'generator/preview',
        'meta': { 'title': '生成预览', 'icon': 'java', 'noCache': false }
      }]
    }, {
      'name': '组件管理',
      'path': '/components',
      'hidden': false,
      'redirect': 'noredirect',
      'component': 'Layout',
      'alwaysShow': true,
      'meta': { 'title': '组件管理', 'icon': 'zujian', 'noCache': true },
      'children': [{
        'name': 'Echarts',
        'path': 'echarts',
        'hidden': false,
        'component': 'components/Echarts',
        'meta': { 'title': '图表库', 'icon': 'chart', 'noCache': false }
      }, {
        'name': 'Icons',
        'path': 'icon',
        'hidden': false,
        'component': 'components/icons/index',
        'meta': { 'title': '图标库', 'icon': 'icon', 'noCache': true }
      }, {
        'name': 'Editor',
        'path': 'tinymce',
        'hidden': false,
        'component': 'components/Editor',
        'meta': { 'title': '富文本', 'icon': 'fwb', 'noCache': true }
      }]
    }, {
      'name': '多级菜单',
      'path': '/nested',
      'hidden': true,
      'redirect': 'noredirect',
      'component': 'Layout',
      'alwaysShow': true,
      'meta': { 'title': '多级菜单', 'icon': 'menu', 'noCache': true },
      'children': [{
        'name': '二级菜单1',
        'path': 'menu1',
        'hidden': false,
        'redirect': 'noredirect',
        'component': 'nested/menu1/index',
        'alwaysShow': true,
        'meta': { 'title': '二级菜单1', 'icon': 'menu', 'noCache': true },
        'children': [{
          'name': '三级菜单1',
          'path': 'menu1-1',
          'hidden': false,
          'component': 'nested/menu1/menu1-1',
          'meta': { 'title': '三级菜单1', 'icon': 'menu', 'noCache': true }
        }, {
          'name': '三级菜单2',
          'path': 'menu1-2',
          'hidden': false,
          'component': 'nested/menu1/menu1-2',
          'meta': { 'title': '三级菜单2', 'icon': 'menu', 'noCache': true }
        }]
      }, {
        'name': '二级菜单2',
        'path': 'menu2',
        'hidden': false,
        'component': 'nested/menu2/index',
        'meta': { 'title': '二级菜单2', 'icon': 'menu', 'noCache': true }
      }]
    }]
    const asyncRouter = filterAsyncRouter(results)
    asyncRouter.push({ path: '*', redirect: '/404', hidden: true })
    store.dispatch('GenerateRoutes', asyncRouter).then(() => { // 存储路由
      router.addRoutes(asyncRouter) // 动态添加可访问路由表
      next({ ...to, replace: true })
    })
  })
}

router.afterEach(() => {
  NProgress.done() // finish progress bar
})
