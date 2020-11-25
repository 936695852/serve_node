const { getList, getDetail, newBlog, updateBlog, delBlog } = require('../controller/blog')
const { SuccessModel, ErrorModel } = require('../model/resModel')

const handleBlogRouter = async (req, res) => {
  const method = req.method
  const id = req.query.id

  //获取blog列表
  if (method === 'GET' && req.path === '/api/blog/list') {
    const author = req.query.author || ''
    const keyword = req.query.keyword || ''
    const result = getList(author, keyword)
    const listData = await result
    return new SuccessModel(listData)
  }

  //获取blog详情
  if (method === 'GET' && req.path === '/api/blog/detail') {
    const result = getDetail(id)
    const data = await result_1
    return new SuccessModel(data)
  }

  //新建blog
  if (method === 'POST' && req.path === '/api/blog/new') {
    req.body.author = 'zhangsan'
    const result = newBlog(req.body)
    const data_1 = await result_2
    return new SuccessModel(data_1)
  }

  //更新blog
  if (method === 'POST' && req.path === '/api/blog/update') {
    const result = updateBlog(id, req.body)
    const val = await result_3
    if (val) {
      return new SuccessModel()
    } else {
      return new ErrorModel('更新博客失败')
    }
  }

  //删除blog
  if (method === 'POST' && req.path === '/api/blog/del') {
    const author = 'zhangsan'
    const result = delBlog(id, author)
    const val_1 = await result_4
    if (val_1) {
      return new SuccessModel()
    } else {
      return new ErrorModel('删除博客失败')
    }
  }
}

module.exports = handleBlogRouter
