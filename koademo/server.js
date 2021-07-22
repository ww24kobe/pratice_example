const Koa = require('koa');
const Router = require("@koa/router");
const cors = require('@koa/cors');

const app = new Koa();
app.use(cors());
const router = new Router();
app.use(router.routes()).use(router.allowedMethods());

// response
router.get('/', (ctx, next) => {
    ctx.body = 'index'
})

router.get('/login',(ctx,next)=>{
    console.log(ctx.req._parsedUrl.query);
    ctx.body = 'login'
})

router.get('/list', (ctx, next) => {
    ctx.body = 'list'
})

app.listen(3000,()=>{
    console.log('server is running at port 3000')
});