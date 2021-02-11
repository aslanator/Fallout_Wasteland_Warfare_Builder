import express from 'express';
import routes from './router/routes';
require('./database');

const app = express()
const port = 3002;

routes(app);

app.get('/', (_, res) => {
  res.send('Home');
})

console.log('listening');
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

process.on('exit', (code) => {
  console.log(`About to exit with code: ${code}`);
});

process.on('uncaughtException', (code) => {
  console.log(`About to uncaughtException with code: ${code}`);
});
