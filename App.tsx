import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './src/components/Home';
import React, {useEffect, useState} from 'react';
import ImageScreen from './src/components/ImageScreen';
import {PersistGate} from 'reduxjs-toolkit-persist/integration/react';
import Login from './src/components/Login';
import Register from './src/components/Register';
import UserProfile from './src/components/UserProfile';
import {Provider} from 'react-redux';
import {persistor, store} from './src/redux/store';

const Stack = createStackNavigator();

function App(): JSX.Element {
  const [showImage, setShowImage] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowImage(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator>
            {showImage ? (
              <Stack.Screen
                name="ImageScreen"
                component={ImageScreen}
                options={{headerShown: false}}
              />
            ) : (
              <Stack.Screen
                name="Home"
                component={Home}
                options={{headerShown: false}}
              />
            )}
            <Stack.Screen
              name="Login"
              component={Login}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Register"
              component={Register}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="UserProfile"
              component={UserProfile}
              options={{headerShown: false}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

export default App;
