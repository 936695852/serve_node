const { login } = require('../controller/user')
const { SuccessModel, ErrorModel } = require('../model/resModel')

const handleUserRouter = async (req, res) => {
  const method = req.method
  //登录
  if (method === 'POST' && req.path === '/api/user/login') {
    const { username, password } = req.body

    const data = await login(username, password)
    if (data.username) {
      return new SuccessModel()
    }
    return new ErrorModel('登录失败')
  }
}

module.exports = handleUserRouter
