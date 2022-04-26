const Koa = require('koa')
const serve = require('koa-static')
const path = require('path')

const app = new Koa()
app.use(serve(path.join(__dirname, './src/black_jack_front/dist_old')))

app.listen(5000, () => {
    console.log('listening on port 5000..')
});