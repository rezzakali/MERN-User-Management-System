const express = require('express');
require('dotenv').config();
const cors = require('cors');
require('./db/dbConnection');
const userHandler = require('./handler/userHandler');

const app = express();
// cors error
app.use(cors({ origin: 'http://localhost:3000' }));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/user', userHandler);

// error handler
app.use((err, req, res, next) => {
  if (res.headersSent) {
    return next();
  } else {
    res.status(500).json({ error: 'There was a server side error!' });
  }
});

app.listen(process.env.PORT, process.env.HOST_NAME, () => {
  console.log(
    `Your server is running successfully at http://${process.env.HOST_NAME}:${process.env.PORT}`
  );
});
