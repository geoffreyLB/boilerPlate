const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
  ctx.body = 'Hello old place';
});

app.listen(3000);
