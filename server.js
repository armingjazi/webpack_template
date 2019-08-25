import express from 'express';

const host = process.env.HOST || '127.0.0.1';
const port = process.env.PORT || 3000;

const app = express();

function serverStarted () {
  console.log('Server Started at', `http://${host}:${port}/`);
  console.log('Press Ctrl+C to exit...\n');
}

app.listen(port, host, serverStarted);

app.use(express.static('dist'));
