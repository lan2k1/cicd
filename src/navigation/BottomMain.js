import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  Image,
  View,
  TouchableOpacity,
  Animated,
  StyleSheet,
} from 'react-native';
import { Home, Statistic, Information, Setting, Notification } from '@screens';
import { scaleWidth, scaleHeight } from '@utils';
import { Text } from '@components';
import {RESOURCES} from '@config';
import ScreenName from 'app/screens/ScreenName';

const BottomStack = createBottomTabNavigator();

const IconTab = ({ focused, source }) => {
  if (!focused) {
    return <IconNormal source={source} />;
  }
  return <IconAnimated source={source} />;
};

const IconAnimated = React.memo(({ source, focused }) => {
  const scale = React.useRef(new Animated.Value(1)).current;
  const ImageAnimated = Animated.createAnimatedComponent(Image);

  React.useEffect(() => {
    Animated.timing(scale, {
      toValue: focused ? 1.3 : 1,
      duration: 200,
      useNativeDriver: true,
    }).start();
  }, [focused]);

  return (
    <ImageAnimated
      animation={'zoomIn'}
      duration={200}
      source={source}
      style={styles.imgAnimated(scale, focused)}
    />
  );
});

const LabelTab = ({ focused, color, title }) => {
  return (
    <Text
      fontSize={scaleWidth(3.5)}
      color={focused ? '#151515' : '#6E6E6E'}
      fontFamily={focused ? 'medium' : 'regular'}>
      {title}
    </Text>
  );
};

const Icon = ({ source, title, focused }) => {
  return (
    <View style={{ alignItems: 'center' }}>
      <IconAnimated source={source} focused={focused} />
    </View>
  );
};

const AddIcon = () => {
  return (
    <View style={styles.addBtn}>
      <Image source={RESOURCES.icons.add} style={styles.addIcon} />
    </View>
  );
};

const getIcon = (label) => {
  let icon = '';
  switch (label) {
    case 'Home':
      icon = RESOURCES.icons.home;
      break;
    case 'Statistic':
      icon = RESOURCES.icons.statistics;
      break;
    case 'Information':
      icon = RESOURCES.icons.information;
      break;
    case 'Setting':
      icon = RESOURCES.icons.settings;
      break;
    default:
      break;
  }
  return icon;
};

function MyTabBar({ state, descriptors, navigation }) {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <View style={{ flexDirection: 'row', backgroundColor: 'white' }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label = route.name;
        const icon = getIcon(label);

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            if (index === 2) {
              // Dispatch action Add button
            } else {
              navigation.navigate(route.name);
            }
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            onPress={onPress}
            onLongPress={onLongPress}
            activeOpacity={1}
            style={[
              styles.btnTab,
              index === 0 && { borderTopLeftRadius: 30 },
              index === 4 && { borderTopRightRadius: 30 },
            ]}
            key={index}>
            {index === 2 ? (
              <AddIcon source={icon} />
            ) : (
              <Icon source={icon} title={label} focused={isFocused} />
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const Bottom = () => {
  return (
    <BottomStack.Navigator
      initialRouteName={ScreenName.Home}
      tabBarOptions={{
        allowFontScaling: false,
      }}
      tabBar={(props) => <MyTabBar {...props} />}>
      <BottomStack.Screen
        name={ScreenName.Home}
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <IconTab source={RESOURCES.icons.home} focused={focused} />
          ),
          tabBarLabel: ({ focused, color }) => (
            <LabelTab title="Home" focused={focused} color={color} />
          ),
        }}
      />
      <BottomStack.Screen
        name={ScreenName.Statistic}
        component={Statistic}
        options={{
          tabBarIcon: ({ focused }) => (
            <IconTab source={RESOURCES.icons.statistics} focused={focused} />
          ),
          tabBarLabel: ({ focused, color }) => (
            <LabelTab title="Statistics" focused={focused} color={color} />
          ),
        }}
      />
      <BottomStack.Screen
        name={ScreenName.Notification}
        component={Notification}
      />
      <BottomStack.Screen
        name={ScreenName.Information}
        component={Information}
        options={{
          tabBarIcon: ({ focused }) => (
            <IconTab source={RESOURCES.icons.information} focused={focused} />
          ),
          tabBarLabel: ({ focused, color }) => (
            <LabelTab title="Informations" focused={focused} color={color} />
          ),
        }}
      />
      <BottomStack.Screen
        name={ScreenName.Setting}
        component={Setting}
        options={{
          tabBarIcon: ({ focused }) => (
            <IconTab source={RESOURCES.icons.settings} focused={focused} />
          ),
          tabBarLabel: ({ focused, color }) => (
            <LabelTab title="Settings" focused={focused} color={color} />
          ),
        }}
      />
    </BottomStack.Navigator>
  );
};

export default Bottom;

const styles = StyleSheet.create({
  btnTab: {
    width: scaleWidth(20),
    height: scaleWidth(15),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 10,
  },
  imgAnimated: (scale, focused) => {
    return {
      width: scaleWidth(5.2),
      height: scaleWidth(5.2),
      tintColor: focused ? '#151515' : '#BDBDBD',
      transform: [{ scale }],
    };
  },
  addBtn: {
    width: scaleWidth(15),
    height: scaleWidth(15),
    borderRadius: scaleWidth(15),

    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00BFFF',
    marginBottom: scaleWidth(15),

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  addIcon: {
    width: scaleWidth(5.2),
    height: scaleWidth(5.2),
    tintColor: '#FFF',
  },
});
