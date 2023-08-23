import React from 'react';
import {Text, View} from 'react-native';
import {ProductProps} from '../types/ProductProps';

interface ProductComponentProps {
  product: ProductProps;
}

function Product({product}: ProductComponentProps) {
  return (
    <View>
      <Text>Title: {product.name}</Text>
      <Text>Price: {product.price}</Text>
      <Text>Description: {product.description}</Text>
    </View>
  );
}

export default Product;
