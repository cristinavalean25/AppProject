import React from 'react';
import {View, Text} from 'react-native';
import {useSelector} from 'react-redux';

const ProductList = () => {
  const products = useSelector(state => state.products);

  return (
    <View>
      {products.map(
        (product: {
          id: React.Key | null | undefined;
          title:
            | string
            | number
            | boolean
            | React.ReactElement<any, string | React.JSXElementConstructor<any>>
            | Iterable<React.ReactNode>
            | React.ReactPortal
            | null
            | undefined;
          category:
            | string
            | number
            | boolean
            | React.ReactElement<any, string | React.JSXElementConstructor<any>>
            | Iterable<React.ReactNode>
            | React.ReactPortal
            | null
            | undefined;
          price:
            | string
            | number
            | boolean
            | React.ReactElement<any, string | React.JSXElementConstructor<any>>
            | Iterable<React.ReactNode>
            | React.ReactPortal
            | null
            | undefined;
          description:
            | string
            | number
            | boolean
            | React.ReactElement<any, string | React.JSXElementConstructor<any>>
            | Iterable<React.ReactNode>
            | React.ReactPortal
            | null
            | undefined;
        }) => (
          <View key={product.id}>
            <Text>Title: {product.title}</Text>
            <Text>Category: {product.category}</Text>
            <Text>Price: {product.price}</Text>
            <Text>Description: {product.description}</Text>
          </View>
        ),
      )}
    </View>
  );
};

export default ProductList;
