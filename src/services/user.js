/**
 * @description user services
 * @author hayho
 */

const User = require('../db/model/User')
const { formatUser } = require('./_format')
/**
 * 获取用户信息
 * @param {string} userName 用户名
 * @param {string} passWord 密码
 */
async function getUserInfo(userName,password) {
  // 查询条件
  const whereOpt = {
    userName
  }
  if (password) {
    Object.assign(whereOpt, {password})
  }

  // 查询
  const result = await User.findOne({
    attributes: ['id', 'userName', 'nickName', 'picture', 'city'],
    where: whereOpt
  })
  if (result == null) {
    // 未找到
    return result
  }

  // 格式化
  const formatResult = formatUser(result.dataValues)
  return formatResult
}

/**
 * 创建用户
 * @param {object} param0 
 */
async function createUser({userName, password, genderen=3, nickName}) {
  const result = await User.create({
    userName, 
    password, 
    nickName: nickName ? nickName : userName, 
    genderen
  }) 
  return result.dataValues
}

/**
 * 删除用户
 * @param {string} userName 
 */
async function deleteUser(userName) {
  const result = await User.destroy({
    where: {
      userName
    }
  })
  return result > 0
}

module.exports = {
  getUserInfo, createUser, deleteUser
}