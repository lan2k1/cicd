import * as React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import { ScreenName, Notification } from '@screens';
import BottomMain from './BottomMain';

const App = createStackNavigator();

const AppStack = () => {
  return (
    <App.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
      initialRouteName={ScreenName.BottomMain}>
      <App.Screen name={ScreenName.BottomMain} component={BottomMain} />
      <App.Screen name={ScreenName.Notification} component={Notification} />
    </App.Navigator>
  );
};

export default AppStack;
