const baseUrl = process.env.VUE_APP_BASE_API
const api = {
  state: {
    // 部署包上传
    deployUploadApi: baseUrl + '/iotapi/deploy/upload',
    // SQL脚本上传
    databaseUploadApi: baseUrl + '/iotapi/database/upload',
    // 实时控制台
    socketApi: baseUrl + '/websocket?token=kl',
    // 图片上传
    imagesUploadApi: baseUrl + '/iotapi/pictures',
    // 修改头像
    updateAvatarApi: baseUrl + '/iotapi/users/updateAvatar',
    // 上传文件到七牛云
    qiNiuUploadApi: baseUrl + '/iotapi/qiNiuContent',
    // Sql 监控
    sqlApi: baseUrl + '/druid',
    // swagger
    swaggerApi: baseUrl + '/swagger/',
    // 文件上传
    fileUploadApi: baseUrl + '/iotapi/upload',
    // API接口
    iotApi: baseUrl + '/iotapi/',
    // baseUrl，
    baseApi: baseUrl
  }
}

export default api
