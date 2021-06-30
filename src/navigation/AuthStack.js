import * as React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import { ScreenName, SignIn, SignUp } from '@screens';

const Auth = createStackNavigator();

const AuthStack = () => {
  return (
    <Auth.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <Auth.Screen name={ScreenName.SignIn} component={SignIn} />
      <Auth.Screen name={ScreenName.SignUp} component={SignUp} />
    </Auth.Navigator>
  );
};

export default AuthStack;
