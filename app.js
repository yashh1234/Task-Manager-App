const express = require('express');
const app = express();
const tasks = require('./routes/tasks')
require('dotenv').config()({ path: path.resolve(__dirname, './.env') })
const connectDB = require('./db/connect')
const notFound = require('./middlewares/not-found')
const errorHandlerMiddleware = require('./middlewares/error-handler')
const path = require('path')

// Middlewares
app.use(express.static('./public'))
app.use(express.json())

// Routes
app.use('/api/v1/tasks', tasks)

app.use(notFound)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB()
    app.listen(port, console.log(`Server is listening on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
}

start()