// 使用renduce求和模块
function sum(...args) {
 const result = args.reduce((previous, current) => {
    return previous + current;
 }, 1)
  return result 
}
exports.sum = sum