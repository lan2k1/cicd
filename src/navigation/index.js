import * as React from 'react';
import { useSelector } from 'react-redux';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { navigationRef } from './NavigationService';

import { Splash } from '@screens';
import AppStack from './AppStack';
import AuthStack from './AuthStack';

const Stack = createStackNavigator();

const MainStack = () => {
  const { isLogin } = useSelector((state) => state.auth);
  const { startApp } = useSelector((state) => state.loading);

  if (startApp) {
    return <Splash />;
  }
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          gestureEnabled: false,
        }}>
        {isLogin ? (
          <Stack.Screen name="AppStack" component={AppStack} />
        ) : (
          <Stack.Screen name="AuthStack" component={AuthStack} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStack;
