import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  OnBoardingScreen,
  LoginScreen,
  RegisterScreen,
  HomeScreen,
  FavoritesScreen,
  ProfileScreen,
  OrderScreen,
  ShippingScreen,
} from '../screens';
import ScreenStackNavigation from './ScreenStackNavigation';
import { NotificationScreen } from '../screens/dash/notifcationScreen';

const Stack = createNativeStackNavigator();
const AuthStackNavigation = () => {
  return (
      <Stack.Navigator initialRouteName="OnBoardingScreen">
        <Stack.Screen
          name="OnBoardingScreen"
          component={OnBoardingScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="FavoritesScreen"
          component={FavoritesScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="NotificationScreen"
          component={NotificationScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="OrderScreen"
          component={OrderScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ShippingScreen"
          component={ShippingScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ScreenStackNavigation"
          component={ScreenStackNavigation}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
  );
};
export default AuthStackNavigation;
