import React, { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import UserSelectionScreen from './screens/user/UserSelectionScreen ';
import SplashScreen from './screens/SplashScreen';
import EmployeeLoginScreen from './screens/user/EmployeeLoginScreen';
import MenuScreen from './screens/user/MenuScreen';
import CartScreen from './screens/user/CartScreen';
import SuccessScreen from './screens/user/SuccessScreen';
import PaymentScreen from './screens/user/PaymentScreen';
import FailureScreen from './screens/user/FailureScreen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="UserSelection" component={UserSelectionScreen} />
        <Stack.Screen name="EmployeeLogin" component={EmployeeLoginScreen} />
        <Stack.Screen name="Menu" component={MenuScreen} />
        <Stack.Screen name="CartScreen" component={CartScreen} />
        <Stack.Screen name="PaymentScreen" component={PaymentScreen} />
        <Stack.Screen name="SuccessScreen" component={SuccessScreen} />
        <Stack.Screen name="FailureScreen" component={FailureScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
