const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const morgan = require('morgan');

const connectDB = require('./db');

const app = express();

dotenv.config({ path: './config.env' });
connectDB();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(cors());
app.use(express.json());

app.get('/api/categories', cors(), (req, res) => {
  res.send([
    {
      id: 1,
      category: 'Ubrania',
      subcategory: [
        'Kurtki i płaszcze',
        'Body',
        'Bluzki',
        'Bluzy i swetry',
        'Sukienki',
      ],
    },
    { id: 2, category: 'Kosmetyki' },
    { id: 3, category: 'Akcesoria' },
    { id: 4, category: 'Mama' },
    { id: 5, category: 'Gry i zabawki' },
    { id: 6, category: 'Ksiązki, muzyka i film' },
  ]);
});

app.get('/api/products', cors(), (req, res) => {
  res.send([
    {
      id: 1,
      title: 'Kurtka',
      shop_name: 'Zalando',
      price: 79,
      sale_price: 59,
      currency: 'zł',
      image:
        'https://img.smyk.com/https://beta-cdn.smyk.com/media/product/390/1/cool-club-bluza-dziewczeca-z-kapturem-rozpinana-szara-melanz-myszka-minnie-6741433.jpg',
    },
    {
      id: 2,
      title: 'Bluza',
      shop_name: 'H&M',
      price: 49,
      sale_price: 39,
      currency: 'zł',
      image:
        'https://cdn.51015kids.eu/product_picture/fill_1181x1772/9a7bc84532c765c1d017f1a642cced82.jpg',
    },
    {
      id: 3,
      title: 'Spodnie',
      shop_name: 'Reserved',
      price: 59,
      sale_price: 49,
      currency: 'zł',
      image:
        'https://img.smyk.com/https://beta-cdn.smyk.com/media/product/390/1/cool-club-legginsy-dziewczece-czarne-kropki-6746657.jpg',
    },
    {
      id: 4,
      title: 'Body',
      shop_name: 'C&A',
      price: 39,
      sale_price: 29,
      currency: 'zł',
      image:
        'https://img.smyk.com/https://beta-cdn.smyk.com/media/product/390/1/cool-club-body-dziewczece-z-dlugim-rekawem-biale-serduszka-myszka-minnie-6742154.jpg',
    },
    {
      id: 5,
      title: 'Kurtka',
      shop_name: 'Zalando',
      price: 79,
      sale_price: 59,
      currency: 'zł',
      image:
        'https://img.smyk.com/https://beta-cdn.smyk.com/media/product/390/1/cool-club-bluza-dziewczeca-z-kapturem-rozpinana-szara-melanz-myszka-minnie-6741433.jpg',
    },
    {
      id: 6,
      title: 'Bluza',
      shop_name: 'H&M',
      price: 49,
      sale_price: 39,
      currency: 'zł',
      image:
        'https://cdn.51015kids.eu/product_picture/fill_1181x1772/9a7bc84532c765c1d017f1a642cced82.jpg',
    },
    {
      id: 7,
      title: 'Spodnie',
      shop_name: 'Reserved',
      price: 59,
      sale_price: 49,
      currency: 'zł',
      image:
        'https://img.smyk.com/https://beta-cdn.smyk.com/media/product/390/1/cool-club-legginsy-dziewczece-czarne-kropki-6746657.jpg',
    },
    {
      id: 8,
      title: 'Body',
      shop_name: 'C&A',
      price: 39,
      sale_price: 29,
      currency: 'zł',
      image:
        'https://img.smyk.com/https://beta-cdn.smyk.com/media/product/390/1/cool-club-body-dziewczece-z-dlugim-rekawem-biale-serduszka-myszka-minnie-6742154.jpg',
    },
  ]);
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
