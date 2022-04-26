const Koa = require('koa');
const router = require('./router');
const koaBody = require('koa-body');
const serve = require('koa-static')
const path = require('path')

const app = new Koa();

app.use(koaBody());
app.use(router.routes());
app.use(router.allowedMethods());



app.use(async (ctx) => {
    ctx.body = 'Hello world';
})

app.listen(3000, () => {
    console.log('listening on port 3000..')
});

