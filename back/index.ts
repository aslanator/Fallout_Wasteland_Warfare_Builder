import express from 'express';
import routes from './router/routes';
import path from 'path';
import cors from 'cors';
require('./database');

const app = express()
const port = 3002;

app.use(cors());

routes(app);

app.get('*', (_, res) => {
  res.sendFile(path.join(__dirname+'/../front/public/public/index.html'));
})

app.get('admin/*', (_, res) => {
  res.send('admin');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

process.on('exit', (code) => {
  console.log(`About to exit with code: ${code}`);
});

process.on('uncaughtException', (code) => {
  console.log(`About to uncaughtException with code: ${code}`);
});
