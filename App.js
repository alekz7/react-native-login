
import React from 'react';
import Splash from './src/screens/SplashScreen';
import LoginScreen from './src/screens/Login/loginScreen';
import HomeScreen from './src/screens/Home/homeScreen'
import 'react-native-gesture-handler';
import { NavigationContainer, getActionFromState } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Block, Button, TextView } from './src/components';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Cart from './src/screens/Cart/Cart';
import Search from './src/screens/Search/Search';
import Profile from './src/screens/Profile/Profile';

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();

function CustomTab({ state, descriptors, navigation }) {
  return (
    <Block color='#FD0014' direction='row' 
      style={{
      paddingBottom:40,
      borderTopLeftRadius: 14,
      borderTopRightRadius: 14,
    }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        const getIcon = () => {
          switch(route.name){
            case 'Home': return 'explore';
            case 'Cart': return 'shopping-cart';
            case 'Profile': return 'verified-user';
            case 'Search': return 'search';
          }
        }

        return (
          <Button      
            block={isFocused}      
            onPress={onPress}
            onLongPress={onLongPress}
          >
            <Block padding={14} centered middle>            
              <Block padding={8} 
                direction='row' 
                middle
                paddingHorizontal={12}
                borderRadius={20}
                color={ isFocused ? 'rgba(255,159,243,0.3)' : '#FD0014' }              
              >
                <MaterialIcons 
                  name={getIcon()}
                  size={25}
                  color={ isFocused ? '#fff' : '#222' } />
                {isFocused && (
                  <TextView h6 color={ isFocused ? '#fff' : '#222' }>
                  {'     '}
                  {label}
                </TextView>)}
              </Block>            
            </Block>
          </Button>
        );
      })}
    </Block>
  );
}

function MainTab() {
  return (
    <Tab.Navigator tabBarOptions={{}} tabBar={props => <CustomTab {...props} />}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Cart" component={Cart} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Profile" component={Profile} />      
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRoute={'Splash'} headerMode='none'>
        <Stack.Screen name="MainTab" options={{}} component={MainTab} />
        <Stack.Screen name="Splash" options={{}} component={Splash} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
} 
