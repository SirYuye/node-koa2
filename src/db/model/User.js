/**
 * @description User数据模型
 */
const seq = require('../seq')
const { STRING, DECIMAL } = require('../types')

const User = seq.define('user', {
  userName: {
    type: STRING,
    allowNull: false,
    unique: true,
    commit: '用户名唯一'
  },
  password: {
    type: STRING,
    allowNull: false,
    commit: '密码'
  },
  nickName: {
    type: STRING,
    allowNull: false,
    commit: '昵称'
  },
  gender: {
    type: DECIMAL,
    allowNull: false,
    defaultValue: 3,
    commit: '性别 1男性 2女性 3保密'
  },
  picture: {
    type: STRING,
    commit: '头像'
  },
  city: {
    type: STRING,
    commit: '城市'
  }
})

module.exports = User