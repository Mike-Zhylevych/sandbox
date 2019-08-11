import express from 'express';

const server = express();

server.use('/_healthcheck', (_req, res) => {
  res.status(200).json({ uptime: process.uptime() });
});

server.get('/',function (req, res) {
    console.log(req);
  res.send('Hello World!!');
});

server.listen(4004, () => { console.log('Running at http://localhost:4004') })