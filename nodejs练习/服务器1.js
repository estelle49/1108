/**
 * 1.通过指令运行服务器
 * 2.通过地址访问服务器
 * 3.访问服务器后，服务器就会通过http.createServer(callback)中的callback处理请求
 * 4.通过res.end("hello server") 来返node回响应
 * 注：修改服务器代码，需要重启服务器
 */
/**引入http模块 */
const http = require("http");
//创建服务
const server = http.createServer((req, res) => {
  /**
   * 该函数用来处理请求
   * 参数：request 请求对象：客户端发送给服务器的数据
   * response 响应对象：服务器发送给客户端的数据
   */
  //设置响应头
  res.setHeader("Content-Type", "text/plain;charset=utf8")
  //使用end方法，返回响应
  res.end("文本")
  //乱码问题： 服务器默认使用utf8编码，客户端默认使用gbk解码。在响应头设置charset = utf8，表示使客户端用utf8解码
})
  //定义端口号（四位数以上）,域名
  const port = 3000
  const host = "localhost"
  //启动服务器，参数：port端口号，host域名（localhost域名、127.0.0.1 ip地址）
server.listen((port, host, err) => {
  
  // 域名和ip地址之间的关系：IP地址，四位数组成数字，不利于记忆；域名方便记忆，域名不能被解析，需要通过DNS解析，将域名解析为IP地址
  //回调函数，参数err,判断服务器启动是否成功
  if (err) {
    console.log("服务器启动失败")
  }
  //定义地址，访问服务器地址
  const address = `http://${host}:${port}`;
  console.log("")
})
