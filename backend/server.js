const express = require('express');
const dotenv  = require('dotenv').config();
const port = process.env.PORT || 5000;
const {errorHandler } = require('./middleware/errorMiddleware')
const app = express();

// in order to use body function we should use below middlewares 
// without using below middlewares output show undefined
app.use(express.json())
app.use(express.urlencoded({extended: false }))


app.use('/api/goals', require('./routes/goalRoutes'))

// it will override default error handler
app.use(errorHandler)

app.listen(port, ()=> console.log(`server started on port ${port}`));