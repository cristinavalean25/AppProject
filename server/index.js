const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

const products = [
  {id: 1, name: 'Produs 1', price: 10.99},
  {id: 2, name: 'Produs 2', price: 19.99},
];

app.get('/products', (_req, res) => {
  res.json(products);
});

app.post('/products', express.json(), (req, res) => {
  const newProduct = req.body;
  products.push(newProduct);
  res.status(201).json(newProduct);
});

app.put('/products/:id', express.json(), (req, res) => {
  const productId = parseInt(req.params.id);
  const updatedProduct = req.body;

  const index = products.findIndex(product => product.id === productId);
  if (index !== -1) {
    products[index] = {...products[index], ...updatedProduct};
    res.json(products[index]);
  } else {
    res.status(404).json({message: 'Produsul nu a fost găsit.'});
  }
});

app.delete('/products/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  const index = products.findIndex(product => product.id === productId);

  if (index !== -1) {
    const deletedProduct = products.splice(index, 1)[0];
    res.json(deletedProduct);
  } else {
    res.status(404).json({message: 'Produsul nu a fost găsit.'});
  }
});

app.get('/', (req, res) => {
  res.send('Bun venit la API-ul meu!');
});

app.listen(port, () => {
  console.log(`Serverul rulează la adresa http://localhost:${port}`);
});
