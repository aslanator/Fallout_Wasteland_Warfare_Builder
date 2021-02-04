import express from 'express';
import Item from './database/models/Item';
require('./database');

const app = express()
const port = 3002

app.get('/', (_, res) => {
  Item.find(function (err, items) {
    if (err) return console.error(err);
    res.send(items)
  })
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
