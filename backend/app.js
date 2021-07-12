const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const morgan = require('morgan');

const connectDB = require('./db');

const productRouter = require('./routes/productRoutes');
const categoryRouter = require('./routes/categoryRoutes');

const app = express();
const path = require('path');
dotenv.config({ path: path.resolve(__dirname, './config.env') });
connectDB();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(cors());
app.use(express.json());

//ROUTES

app.use('/api/products', productRouter);
app.use('/api/categories', categoryRouter);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
