import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../types/RootStackParamList';
import Navbar from './Navbar';
import AddProduct from '../produse/AddProduct';

export type HomeProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Home'>;
};

function Home({navigation}: HomeProps) {
  const backgroundStyle = {
    backgroundColor: '#fff',
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={backgroundStyle}>
          <Navbar navigation={navigation} />
          <AddProduct />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

export default Home;
