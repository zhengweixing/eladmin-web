import { getToken, setToken, removeToken } from '@/utils/auth'
import { get_login, get_users_me, post_logout } from '@/api/iotapi'

const user = {
  state: {
    token: getToken(),
    user: {},
    roles: [],
    avatar: '',
    // 第一次加载菜单时用到
    loadMenus: false
  },

  mutations: {
    SET_USER: (state, user) => {
      state.user = user
    },
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_NAME: (state, name) => {
      state.name = name
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    },
    SET_USERID: (state, userid) => {
      state.userid = userid
    },
    SET_NICK: (state, nick) => {
      state.nick = nick
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    },
    SET_LOAD_MENUS: (state, loadMenus) => {
      state.loadMenus = loadMenus
    }
  },

  actions: {
    // 登录
    Login({ commit }, userInfo) {
      console.log('11111')
      const rememberMe = userInfo.rememberMe
      return new Promise((resolve, reject) => {
        get_login(userInfo).then(res => {
          setToken(res.sessionToken, rememberMe)
          commit('SET_TOKEN', res.sessionToken)
          commit('SET_ROLES', res.roles)
          setUserInfo(res, commit)
          const { objectId, username, nick, avatar } = res
          commit('SET_NAME', username)
          commit('SET_USERID', objectId)
          commit('SET_TOKEN', res.sessionToken)
          commit('SET_NICK', nick)
          commit('SET_AVATAR', avatar)
          // 第一次加载菜单时用到， 具体见 src 目录下的 permission.js
          commit('SET_LOAD_MENUS', true)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 获取用户信息
    GetInfo({ commit }) {
      return new Promise((resolve, reject) => {
        get_users_me({ 'sessionToken': user.state.token }).then(res => {
          // setToken(res.sessionToken, rememberMe)
          // @todo 这个地方服务器API返回要改 zwx
          res.roles = res.roles ? res.roles : []
          setUserInfo(res, commit)
          const { objectId, username, nick, avatar } = res
          commit('SET_NAME', username)
          commit('SET_USERID', objectId)
          commit('SET_TOKEN', res.sessionToken)
          commit('SET_NICK', nick)
          commit('SET_AVATAR', avatar)
          // commit('SET_ROLES', roles)
          resolve(res)
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 登出
    LogOut({ commit }) {
      if (user.state.token) {
        return new Promise((resolve, reject) => {
          post_logout({ 'sessionToken': user.state.token }).then(res => {
            logOut(commit)
            resolve()
          }).catch(error => {
            logOut(commit)
            reject(error)
          })
        })
      } else {
        logOut(commit)
      }
    },

    updateLoadMenus({ commit }) {
      return new Promise((resolve, reject) => {
        commit('SET_LOAD_MENUS', false)
      })
    }
  }
}

export const logOut = (commit) => {
  commit('SET_TOKEN', '')
  commit('SET_ROLES', [])
  removeToken()
}

export const setUserInfo = (res, commit) => {
  // 如果没有任何权限，则赋予一个默认的权限，避免请求死循环
  if (res.roles.length === 0) {
    commit('SET_ROLES', ['ROLE_SYSTEM_DEFAULT'])
  } else {
    commit('SET_ROLES', res.roles)
  }
  commit('SET_USER', res.user)
}

export default user
