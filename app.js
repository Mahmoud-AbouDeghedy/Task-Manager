const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');

const taskRouter = require('./routes/taskRoutes');
const notFound = require('./middleware/not-found');
const errorHandler = require('./middleware/error-handler');

const app = express();

app.use(express.json());
app.use(express.static('./public'));

app.use('/api/v1/tasks', taskRouter);
app.use(notFound);
app.use(errorHandler);

const DB = process.env.DATABASE_URL.replace(
  '<password>',
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB)
  .then(() => {
    console.log('DB connection successful!');

    const port = process.env.PORT || 3000;
    app.listen(port, () => console.log(`App running on port ${port}...`));
  })
  .catch((err) => console.log(err));
