import express from 'express';
import http from 'http';

const app = express(),
      port = process.env.PORT || 3000, // eslint-disable-line no-process-env
      server = new http.Server(app);

app.get('/', (_req, res) => {
   res.json({
      pong: new Date(),
   });
});

server.listen(port, () => {
   // eslint-disable-next-line no-console
   console.log(`Listening on port ${port}`);
});
