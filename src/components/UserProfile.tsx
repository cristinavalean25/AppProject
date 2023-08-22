import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Navbar from './Navbar';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../types/RootStackParamList';
import Typography from '../Typography';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {logout} from '../redux/AuthSlice';
import {useDispatch} from 'react-redux';

export type UserProfileProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Home'>;
};

const UserProfile = ({navigation}: UserProfileProps) => {
  const userDetails = {
    name: 'Naila Stefenson ',
    profession: 'Web Developer',
    avatar: require('../Images/screen-0.webp'),
  };
  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('user');
      dispatch(logout());
      navigation.navigate('Login');
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  return (
    <>
      <Navbar
        navigation={
          navigation as StackNavigationProp<RootStackParamList, 'Home'>
        }
      />
      <View style={styles.container}>
        <View style={styles.userInfoContainer}>
          <Image source={userDetails.avatar} style={styles.avatar} />
          <Typography>{userDetails.name}</Typography>
          <Typography mode="extrasmall">{userDetails.profession}</Typography>
        </View>
        <View style={styles.line}>
          <Image
            source={require('../Images/pngwing.png')}
            style={styles.imageLine}
          />
        </View>
        <View style={styles.detailsContainer}>
          <View style={styles.detailItem}>
            <View style={styles.iconContainer}>
              <Icon name="user" size={30} color="#E839F6" />
            </View>
            <Typography>My Profile</Typography>
          </View>
          <View style={styles.detailItem}>
            <View style={styles.iconContainer}>
              <Icon name="comments" size={30} color="#E839F6" />
            </View>
            <Typography styles={styles.detailText}>Messages</Typography>
          </View>
          <View style={styles.detailItem}>
            <View style={styles.iconContainer}>
              <Icon name="heart" size={30} color="#E839F6" />
            </View>
            <Typography styles={styles.detailText}>Favorites</Typography>
          </View>
          <View style={styles.detailItem}>
            <View style={styles.iconContainer}>
              <Icon name="map-marker" size={30} color="#E839F6" />
            </View>
            <Typography styles={styles.detailText}>Location</Typography>
          </View>
          <View style={styles.detailItem}>
            <View style={styles.iconContainer}>
              <Icon name="cog" size={30} color="#E839F6" />
            </View>
            <Typography styles={styles.detailText}>Settings</Typography>
          </View>
        </View>
        <View style={styles.logoutContainer}>
          <View style={styles.lineBottom}>
            <TouchableOpacity onPress={handleLogout}>
              <Typography>Log out</Typography>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 40,
    backgroundColor: '#fff',
  },
  userInfoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  line: {
    width: '100%',
    marginTop: 10,
  },
  imageLine: {
    width: '100%',
    height: 100,
  },
  detailsContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 150,
    marginTop: 50,
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    marginBottom: 15,
  },
  iconContainer: {
    marginRight: 50,
  },
  detailText: {
    fontFamily: 'OpenSans-Regular',
    marginRight: 20,
  },
  logoutContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    backgroundColor: '#fff',
  },
  lineBottom: {
    width: '100%',
    borderTopWidth: 1,
    alignItems: 'center',
  },
});

export default UserProfile;
function dispatch(arg0: any) {
  throw new Error('Function not implemented.');
}
