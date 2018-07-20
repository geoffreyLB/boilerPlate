import Koa from 'koa';
const app = new Koa();

app.use(async ctx => {
  ctx.body = 'Hello toto place';
});

app.listen(3000);
