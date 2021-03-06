const router = require('koa-router')()
const cookieParase = require('cookie-parser')
const { loginRedirect, loginChecks } = require('../middlewares/loginChecks')
router.get('/', loginRedirect, async (ctx, next) => {
  await ctx.render('index', {
    isMe: true,
    blogData: {}
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', loginChecks, async (ctx, next) => {
  // const session = ctx.session
  // if (session.viewNum == null) {
  //   session.viewNum = 0
  // } 
  // session.viewNum++
  // let cookie = ctx.cookies.get('weibo.sid')
  ctx.body = {
    // cookie,
    session: ctx.session
  }
})

router.get('/profile/:userName', async (ctx, next) => {
  const  { userName } = ctx.params
  ctx.body = {
    userName
  }
})

router.get('/profile/:userName/:pageIndex', async (ctx, next) => {
  const  { userName, pageIndex } = ctx.params
  ctx.body = {
    userName, pageIndex
  }
})

module.exports = router
