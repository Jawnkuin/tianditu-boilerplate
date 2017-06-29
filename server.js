/* eslint-disable import/no-extraneous-dependencies */

import express from 'express';
import compression from 'compression';
import path from 'path';

const app = express();
const port = process.env.PORT || 3000;

app.use(compression());

app.use('/dist', express.static(path.join(__dirname, './dist')));

app.use('/imgs', express.static(path.join(__dirname, './assets/imgs')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './dist/index.html'));
});

app.listen(port, () => {
  console.info(`start at localhost:${port}`);
});

export default app;
