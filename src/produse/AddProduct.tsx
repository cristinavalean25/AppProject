import React, {useState} from 'react';
import {View, TextInput, Button, Text, Image} from 'react-native';
import {useDispatch} from 'react-redux';
import {addProduct} from '../redux/action';
import ImagePicker, {ImagePickerResponse} from 'react-native-image-picker';
import {Product} from '../types/Product';

const AddProduct = () => {
  const [productName, setProductName] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [imageLinks, setImageLinks] = useState<string[]>([]);
  const [selectedImage, setSelectedImage] = useState();

  const dispatch = useDispatch();

  const handleAddProduct = () => {
    const newProduct: Product = {
      name: productName,
      category,
      price,
      description,
      images: imageLinks,
      UserProfile: undefined,
    };
    dispatch(addProduct(newProduct));

    setProductName('');
    setCategory('');
    setPrice('');
    setDescription('');
    setImageLinks([]);
  };

  const handleSelectImage = async () => {
    try {
      const response = await ImagePicker.openPicker({
        multiple: true,
      });

      if (response && response.length > 0) {
        const newImageLinks = response.map((image: {path: any}) => image.path);
        setImageLinks([...imageLinks, ...newImageLinks]);
      }
    } catch (error) {
      console.error('Error selecting images:', error);
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Title"
        value={productName}
        onChangeText={setProductName}
      />
      <TextInput
        placeholder="Category"
        value={category}
        onChangeText={setCategory}
      />
      <TextInput
        placeholder="Price"
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"
      />
      <TextInput
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
      />

      <Button title="Select Image" onPress={handleSelectImage} />

      {imageLinks.map((link, index) => (
        <Text key={index}>{link}</Text>
      ))}

      {selectedImage && (
        <Image
          source={{uri: selectedImage}}
          style={{width: 100, height: 100}}
        />
      )}

      <Button title="Add Product" onPress={handleAddProduct} />
    </View>
  );
};

export default AddProduct;
