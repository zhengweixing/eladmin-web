export function Error(data) {
  console.log(data)
  if (data === 'unauthorized') {
    return {
      msg: '您当前已经退出登录！'
    }
  } else if (data === 'Network Error') {
    return {
      msg: '网络错误！'
    }
  } else if (data === 'Invalid username/password.') {
    return {
      msg: '帐号或密码错误！'
    }
  } else if (/locked.*(\d+)/.test(data)) {
    const Time = data.match(/locked.*?(\d+)/)[1]
    return {
      msg: '您的帐号被锁定,请过' + Time + '分钟再试！'
    }
  } else if (/Proxy.*error.*to([^\(]+)\(/.test(data)) {
    const Host = data.match(/Proxy.*error.*to([^\(]+?)\(/)[1].trim()
    return {
      msg: '代理无法连接到服务器：' + Host + '！'
    }
  } else if (/timeout.*?(\d+)ms/.test(data)) {
    const Time = data.match(/timeout.*?(\d+)ms/)[1]
    return {
      msg: '请求未在' + Time + 'ms内返回数据！'
    }
  } else if (data === 'User email is not verified.') {
    return {
      msg: '邮箱未验证通过！'
    }
  } else if (/(.*?)\sForbidden/.test(data)) {
    // const Msg = data.match(/(.*?)\sForbidden/)[1]
    return {
      msg: '您没有此操作权限!'
    }
  } else if (data.routine === 'errorMissingColumn') {
    return {
      msg: '字段不存在!'
    }
  } else {
    return {
      msg: '未知错误！ ' + data
    }
  }
}
