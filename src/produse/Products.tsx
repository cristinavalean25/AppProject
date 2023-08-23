import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import axios from 'axios';
import Product from './Product';
import {ProductProps} from '../types/ProductProps';

function Products() {
  const [products, setProducts] = useState<ProductProps[]>([]);

  useEffect(() => {
    axios
      .get('http://192.168.2.120:3000/products')
      .then(res => {
        console.log(res.data);
        setProducts(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <View>
      {products.map(product => (
        <Product key={product.id} product={product} />
      ))}
    </View>
  );
}

export default Products;
