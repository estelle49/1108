/**
 * 引入http模块
 */
const http = require('http');
//定义要请求的服务器地址
const url = 'http://localhost:3000';
//options发送请求的选项
const options = {};
//创建客户端
const request = http.request(url, options, (res) => {
  //发送请求，接收到响应就会触发的回调函数
  //responce 响应对象，服务器响应给客服端的内容
  let result = '';
  res
    // 接收响应数据的事件
    .on("data", (chunk) => {
      result += chunk.toString();
    })
    //接收响应数据完毕
    .on("end",()=>{})
})

//发送请求
request.end();