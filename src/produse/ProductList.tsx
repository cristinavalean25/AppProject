import React, {useEffect, useState} from 'react';
import {View, Text, FlatList} from 'react-native';

type Product = {
  id: number;
  name: string;
  price: number;
};

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('http://localhost:3000/products')
      .then(response => response.json())
      .then((data: Product[]) => setProducts(data))
      .catch(error => console.error('Eroare:', error));
  }, []);

  return (
    <View>
      <Text>Lista Produse</Text>
      <FlatList
        data={products}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <Text>
            {item.name} - {item.price} RON
          </Text>
        )}
      />
    </View>
  );
};

export default ProductList;
