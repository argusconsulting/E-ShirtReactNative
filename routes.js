import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Registration from './src/screens/Registration/registration';
import Login from './src/screens/Login/login';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import tw from './tailwind.config';
import Home from './src/screens/Home/home';
import Standing from './src/screens/Standing/standing';
import News from './src/screens/News/news';
import Profile from './src/screens/Profile/profile';
import PlayerStats from './src/screens/PlayerStatistics/playerStats';

// Bottom Tab Navigation
const Tab = createBottomTabNavigator();
function BottomTabScreens() {
  return (
    <SafeAreaProvider>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {height: Platform.OS == 'ios' ? 55 : 50},
        }}
        tabBarOptions={{
          showIcon: true,
          showLabel: false,
          activeTintColor: '#fff',
          inactiveTintColor: '#000',
          tabStyle: {backgroundColor: '#222232', paddingBottom: 0},
        
        }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
    
            tabBarIcon: ({focused}) =>
              focused ? (
                <Feather
                  name={'home'}
                  color={'#fff'}
                  size={22}
                  style={tw`mt-2`}
                />
              ) : (
                <Feather
                  name={'home'}
                  color={'#8D8E90'}
                  size={22}
                  style={tw`mt-2`}
                />
              ),
          }}
        />

        <Tab.Screen
          name="Standing"
          component={Standing}
          options={{
       
            tabBarIcon: ({focused}) => 
                focused ? (
                    <AntDesign
                      name={'profile'}
                      color={'#fff'}
                      size={22}
                      style={tw`mt-2`}
                    />
                  ) : (
                    <AntDesign
                      name={'profile'}
                      color={'#8D8E90'}
                      size={22}
                      style={tw`mt-2`}
                    />
            ),
          }}
        />

        <Tab.Screen
          name="News"
          component={News}
          options={{
          
            tabBarIcon: ({focused}) => 
                focused ? (
                  <FontAwesome
                  name={'bookmark'}
                  size={22}
                  color={'#fff'}
                  style={tw`mt-2 `}
                />
                  ) : (
                 
                    <FontAwesome
                    name={'bookmark'}
                    size={22}
                    color={'#8D8E90'}
                    style={tw`mt-2 `}
                  />
            ),
          
          }}
        />

        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
          
            tabBarIcon: ({focused}) => 
                focused ? (
                    <Feather
                      name={'user'}
                      color={'#fff'}
                      size={22}
                      style={tw`mt-2`}
                    />
                  ) : (
                    <Feather
                      name={'user'}
                      color={'#8D8E90'}
                      size={22}
                      style={tw`mt-2`}
                    />
            ),
        
          }}
        />
      </Tab.Navigator>
    </SafeAreaProvider>
  );
}

const Stack = createNativeStackNavigator();

export const StackScreen = () => {


  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
    
  
      <Stack.Screen name="Home" component={BottomTabScreens} />
      <Stack.Screen name="Registration" component={Registration} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="PlayerStats" component={PlayerStats} />
    </Stack.Navigator>
  );
};

const Routes = () => {
  return (
    <NavigationContainer>
    <StackScreen />
  </NavigationContainer>
  )
}

export default Routes

const styles = StyleSheet.create({})