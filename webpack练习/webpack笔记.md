# webpack

## 1.概念

一个静态模块打包器  
 静态模块：模块化的代码，如 js 模块，css 模块等  
 把所有的其他资源（js,css,html 等）整合，统一输出  
 运行时，会构建一个依赖图，依赖图中会包含项目所需要的模块，生成一个 bundle  
 通过 index.js 入口引入项目所需要的的每一个模块  
 webpack 不需要映入一个配置文件来打包项目

### 1.1 定义

webpack 是一个静态模块打包器，即将项目中所需要的模块资源整合在一起，再统一输出；运行时，会在内部构建一个依赖图，依赖图中会映射项目所需要的模块，生成一个或者多个 bundle；依赖图构建有五个核心模块： index.js 为依赖图的入口文件，来引入项目所需要的模块

### 1.2 五个核心概念

1. entry——入口
    - 以某个文件为入口开始打包   
    - 在项目中，常创建index.js文件为entry来打包资源，分析资源的依赖关系
2. output——输出
    - 打包后的资源输出到哪？  
    - 在项目中，通过 output 来确定打包后的资源输出到哪
3. loader——加载器
    - webpack 本身只能识别josn、js模块，其他模块一旦加载就会报错  
    - 用途：模块加载器，打包资源前先要加载
    - 项目中，需要借助loader帮助webpack识别它识别不了的模块，如图片、css、html等模块
4. plugin——插件
    - loader功能有限，如果需要做功能更加强大的工作，则需要使用插件  
5. mode——模式
    - 模式：开发环境（development）和生产环境(production)
    - 通过mode构建环境
### 1.3下载安装
- npm i webpack webpack-cli -g 全局安装
- npm i webpack webpack-cli -D 本地安装，下载到所需要使用的目录下
- npm init -y 下载前，需要初始化package.json
### 1.4两种使用方式
1. 直接使用
   
  - 运行webpack指令：`webpack ./src/js/index.js -o ./dist/js/index.js--mode=development`
     * 以webpack的开发环境运行,以./src/js/index.js文件为入口打包整合资源，输出到dist/js/index.js文件中
     * 运行完成后，webpack每次构建会生成唯一的hash值,可当成id
     * webpack版本
     * 打包时长
     * 构建打包时间
     * 构建打包资源 如输出资源和大小，通过入口文件打包引入的资源会整个成一个串口
     * 指定入口文件是哪个
     * 打包的资源有哪些及大小
  - 功能（较弱）
      1.开发环境运行webpack指令：`webpack ./src/js/index.js -o ./dist/js/index.js--mode=development`
     * 能将ES6模块化编译成浏览器识别的语法
      2.生成环境运行webpack指令：`webpack ./src/js/index.js -o ./dist/js/index.js--mode=production`
     * 能将ES6模块化编译成浏览器识别的语法
     * 压缩js代码
 问题：
 **1.不能识别其他模块（less\css\html\jpg...)**
 **2.webpack中需要通过import...from手动引入参与打包的资源，如果不引入，则不会被打包**
 **3.引入非js、json文件打包会报错，因为webpack不识别除js、json外文件，所以需要使用loader加载让webpack能够处理其他的类型的文件**  
2. 通过配置文件使用
  - webpack.config.js  webpack的配置文件
    在配置文件中书写webpack配置
    基于nodejs运行，commonjs语法，向外暴露一个对象，在对象中书写配置
    例：
    ```
    mpdule.exports = {
      //entry
      
      //output
      //loader
      //plugins
      //mode
    }
    ```
  - 功能更强
  
