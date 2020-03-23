# 1.react介绍
### 1.1定义
用于构建用户界面的JavaScript库
什么是构建：就是编译，将不能识别的代码，构建成浏览器能识别的代码，不需要指令可直接构建  项目构建工具（webpack）
用户界面：UI
JavaScript库主要用于开发web端界面
### 1.2特点
1.声明式
指编码的风格：声明式编码，命名式编码
声明式编码：直接调用声明的方法来实现功能，在react中推荐使用
关注结果，调用声明方法的作用和实现的功能
命令式编码：就是通过一条条命令，来实现功能
2.组件化
组件化和模块化对应
组件化：针对一段有特定功能的代码 组件，由css,js,html组成的
复用率高
模块化：针对js文件，一个js文件就是一个模块

# 2.react基本使用

### 2.1相关js库
1.react.js  react核心库
2.react-dom.js 提供操作dom的react扩展库
3.babel.min.js 捷信JSX语法代码转为语法代码的库
先引入核心库，在引入扩展库，扩展库依赖于核心库
## 2.2使用react？
### 操作步骤
1、引入以上3个库
2、创建虚拟dom对象
3、将虚拟对象渲染到页面指定的容器中(ReactDom.render(dom对象，指定容器))

### 2.3react插件安装
用于调式react
react developer tools.crx

### 2.4创建虚拟dom的语法
1.jsx语法：在js中书写的结构语言称为jsx语法
<script src="...babel.min.js"></script>
<script type= "text/babel">
const dom = <标签名 属性名：属性值>内容<标签名>
</script>
标签内使用 {}中的内容会当做变量解析，js语法解析
<>中的内容当做标签解析
需要babel编译，babel将jsx语法编译成普通的js语法
2.普通js语法
const dom = react.createElement(
  "元素类型",{元素属性："属性值"},"内容"
)
无需babel编译

## 2.5jsx语法
jsx接收到一个数组，会自动展开数组中的每一项值
数组map方法，可遍历数组，react中遍历的每一项元素需要一个唯一的key属性

# 3.组件和模块化
组件与模块化不冲突，在组件中也可以使用模块化
## 3.1组件
1.定义组件方式
①工厂函数组件（简单组件）
function MyComponent(){
  return <h1></h1>
}
说明：
this指向undefined  在严格模式

②ES6类组件（复杂组件）
class MyComponent extends React.Component{
  render(){
    console.log(this)
    return <h1></h1>
  }
}
说明：
this指向组件实例对象 
new某个东西产生的
MyComponent {props: {…}, context: {…}, refs: {…}, updater: {…}, _reactInternalFiber: FiberNode, …}  
构造函数的名字或者类名 {}

注意事项：
1.组件名 首字母必须大写  否则会影响到渲染，因为渲染时小写字母会析成htnl标签，大写字母才会解析成组件名
2.虚拟dom元素中只能有一个根元素
3.虚拟dom元素必须要有结束标签

## 3.2ES6类组件实例对象中的三大属性
## 3.2.1state 状态
#### 怎么使用？ 
1.使用状态之前：必须初始化状态
在constructor中进行初始化
`` 
constructor(){
  this.state = {
    stateProp1:value1
  }
} 
``
2.读取状态
this.state.statePropertyName
3.更新状态--组件界面更新
#### state的作用？
一旦用户界面发生变化，通过更新state的值来改变界面的变化

#### 状态值如何设置？
根据界面该功能的变化来决定状态值的类型
若界面只有两种变化，可使用布尔值
若界面有多种变化，则视情况而定

### 3.2.1state练习

``

<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>07_component_state</title>
  </head>
  <body>
    <div id="example"></div>

    <script type="text/javascript" src="../js/react.development.js"></script>
    <script
      type="text/javascript"
      src="../js/react-dom.development.js"
    ></script>
    <script type="text/javascript" src="../js/babel.min.js"></script>
    
    <script type="text/babel">
      /*
  需求: 自定义组件, 功能说明如下
    1. 显示h2标题, 初始文本为: 你喜欢我
    2. 点击标题更新为: 我喜欢你
  */

      /*
        一旦用户界面发生变化，就用通过控制state来控制它的变化
        state开发流程：
          1. 初始化state
          2. 读取使用state
          3. 更新state
      */
    
      // 定义ES6类组件
      class Like1 extends React.Component {
        constructor() {
          // 使用了extends 必须调用super
          super();
          // 1. 初始化state
          this.state = {
            isLikeMe: false
          };
          // 修改函数this指向（因为constructor是第一个执行，只会执行一次）
          // bind方法不会修改原函数，会返回一个新函数，新函数的this才发生变化
          this.handleClick = this.handleClick.bind(this);
        }
    
        /*
          Like.prototype.handleClick = fn
          const like = new Like();
          // handleClick是实例对象的直接属性? 还是原型上的属性？
          like.__proto__.handleClick
          读取属性看原型链，设置属性不看
        */
        handleClick() {
          /*
            错误：Uncaught TypeError: Cannot read property 'setState' of undefined
            分析错误原因：
              aaa.bbb --> Cannot read property 'bbb' of undefined
                原因是因为aaa是undefined
    
              this是undefined
    
            注意：
              在普通ES6类中，this指向实例对象
              但是在React中，ES6类组件，除了 constructor/render 等函数以外，其他函数的this都是undefined
          
            解决：修改函数this指向
          */
          // console.log(this); // undefined
          // 读取之前的state
          const { isLikeMe } = this.state;
          // 3. 更新状态
          this.setState({
            isLikeMe: !isLikeMe
          });
        }
    
        render() {
          // 2. 读取使用state
          const { isLikeMe } = this.state;
          // 根据状态值来决定显示的内容
          // return <h1 onClick={() => {}}>{isLikeMe ? "你喜欢我" : "我喜欢你"}</h1>;
          return (
            <h1 onClick={this.handleClick}>
              {isLikeMe ? "你喜欢我" : "我喜欢你"}
            </h1>
          );
        }
      }
    
      class Like extends React.Component {
        // 1. 初始化state
        state = {
          isLikeMe: false
        };
    
        // 修改为箭头函数，此时this指向就是组件实例对象了
        handleClick = () => {
          // 读取之前的state
          const { isLikeMe } = this.state;
          // 3. 更新状态
          this.setState({
            isLikeMe: !isLikeMe
          });
        };
    
        render() {
          // 2. 读取使用state
          const { isLikeMe } = this.state;
          // 根据状态值来决定显示的内容
          // return <h1 onClick={() => {}}>{isLikeMe ? "你喜欢我" : "我喜欢你"}</h1>;
          return (
            <h1 onClick={this.handleClick}>
              {isLikeMe ? "你喜欢我" : "我喜欢你"}
            </h1>
          );
        }
      }
    
      // 将组件渲染到页面指定容器中
      ReactDOM.render(<Like />, document.getElementById("example"));
    </script>
  </body>
</html>
``

 

