## 1 JavaScript简介
### 1.1 JavaScript是什么？
* 是一门编程语言
### 1.2 编程语言
* 编程语言就是人与计算机交流的语言
* 图灵完备性(一切可计算的问题都能计算)，所以说HTML和CSS不能算作编程语言
### 1.3 编程语言分类
* 机器语言
  ```
  0101010001110000111000011
  ```
* 汇编语言
  ```
  SET 1
  ```
* 高级语言
  * 编译型语言	;先编译，再运行； 如 Java、C、C++ ... 运行效率更高
  * 解释型语言   ;边编译，边运行； 如JavaScript、PHP、Python...    开发效率更高
### 1.4 JavaScript能做什么

* 浏览器端JS，页面特效（表单验证、各种特效）
* 手机App （ios 编程语言 OC和swift；  安卓：Java）（js开发混合App，一键打包到安卓、ios、windowsphone）
* 游戏（页游，代替flash）
* 后端开发（nodejs）

### 1.5 JavaScript的特点

* 是一种脚本语言
* 是一种解释型语言；  解释器是浏览器或Node；
* 是动态语言，数据自动分配类型，声明变量无需指定类型； 静态语言，声明变量指定类型；
* 弱类型； 数据类型可以自动转换  （强类型：数据类型不可以自动转换）
* 基于对象的编程语言（面向对象）

### 1.6 浏览器端JavaScript 组成

* ECMAScript 基本语法 （使用ES的编程语言：JavaScript、ActionScript）
* BOM （浏览器对象模型） 浏览器提供的一系列API啊（使用代码直接调用的方法）
* DOM （文档对象模型）HTML文档提供的一系列API

## 2 JavaScript最基本语法

### 2.1 JS的三种书写方式

* 内联式 `<button onclick="JS代码">`
* 嵌入式 `<script>JS代码</script>`
* 外部导入 `<script src="JS文件地址"></script>`

### 2.2 注释

* 单行注释  `//`
* 多行注释 `/*  */`

### 2.3 指令结束符

* 每一行代码都是一条指令，需要一个结束符

* JS的指令结束符是 `;`或者换行符

### 2.4 内容输出（输出运算结果，调试代码）

* 以弹框的形式 `alert(内容)` 中断代码的执行
* 控制台输出 `console.log(内容)`, 不影响页面
## 3 变量
### 3.1 数据和直接量
* 计算器运算的就是数据，计算中用到的数据会存储到内存中
* 数据如果直接取用，支撑位直接量 `console.log(100)`
### 3.2 变量

* 把数据取个名字，放在内存中
* 通过变量名取到数据

### 3.3 定义变量

```
var 变量名 = 值;
```

### 3.4 变量名的命名规范

* 包含数字、字母、下划线和$,且不能以数字开头。
* 变量名不能是关键字和保留字
* 变量名要取得有意义 
* 如果变量名有多个单词组成，推荐使用小驼峰命名法





## 4 数据类型

### 4.1 JavaScript数据类型的划分

#### ① 原始类型

* Number   数值
* String  字符串
* Boolean  布尔值    true(真)/false（假）
* Null  空
* Undefind  未定义

#### ② 对象类型

* Array
* Object
* Function
* RegExp
* Error
* Math
* Date
* ..........

### 4.2 数据类型检测函数

```
typeof()
```



### 4.3 Number数值类型

#### ①  整型 （整数）

* 十进制表示
* 八进制表示 `010`  (不推荐)
* 十六进制表示  `0xf90`

#### ②  浮点 （小数）

* 直接写小数
* 科学计数法，表示较大的数；`2.3e3`
* 浮点的精度问题（十进制小数转为二进制小数，大部分无法精确转换；整数不存在这个问题）

#### ③ JS中数值的范围

* 5e324 ~ 1.7976931348623157e+308	
* 如果超过范围，会表示为 Infinity	或者 -Infinity	

#### ④ 特殊的数值 NaN

* NaN是number类型，是一个数值
* 特点1：NaN与任何数进行任何运算结果都是NaN
* 特点2：NaN与任何数都不相等，包括自己

#### ⑤ 数值相关的运算符

```
+  -  *  /  %
```

#### ⑥ 相关函数

```
isNaN()   判断数据是否是NaN， 是返回true，否则返回false
isFinite（） 判断数据是否在范围内，在范围内返回true，否则false
```

### 4.4 字符串类型

#### ① 定义字符串

* 使用单引号或者双引号，没有区别
* 单引号不要嵌套单引号；双引号，同理； 非要嵌套对引号进行转义 `\'` `\"`

#### ② 转义字符

```
\n  表示换行符
\r  表示回车符
\t  水平制表符 tab
\uXXXX 四位十六进制表示unicode字符串
\xXX 两位十六进制表示拉丁字符
```

#### ③ 字符串连接符 +





 





 