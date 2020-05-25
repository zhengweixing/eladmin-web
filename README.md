# iotAdmin
物联网管理后台

#### 开发文档
[https://docs.auauz.net/#/](https://docs.auauz.net/#/)


*****************************

# 功能
    1. 登录, 退出，获取个人信息
    2. 动态左侧菜单
    3. 

****************************
# 编译安装

## 克隆项目
    git clone git@github.com:zhengweixing/eladmin-web.git

## 进入项目目录
    cd eladmin-web

## 安装依赖
    npm install

    npm install --registry=https://registry.npm.taobao.org

## 根据swagger产生API
参考 https://www.npmjs.com/package/swagger-vue-generator

### 安装swagger-vue-generator

    npm install --save-dev swagger-vue-generator

### 将swagger文件放入public目录下

### 执行生成API
```
node ./node_modules/swagger-vue-generator/bin/generate-api.js -s public/swagger.json -d src/api/iota
pi.js -m iot-api
```

### 生成文档
```
node ./node_modules/swagger-vue-generator/bin/generate-doc.js -s public/swagger.json -d public/edoc/ -m iot-api --model-path=models --doc-path=api
```

## 启动服务
    npm run dev
 


#### 常见问题

1、依赖安装失败

可通过配置淘宝的镜像源解决
```
npm config set registry https://registry.npm.taobao.org
```

2、linux 系统在安装依赖的时候会出现 node-sass 无法安装的问题

解决方案：
```
1. 单独安装：npm install --unsafe-perm node-sass 
2. 直接使用：npm install --unsafe-perm
```

3、加速node-sass安装

https://www.ydyno.com/archives/1219.html


- 交流
``` 
微信 zh-12306