import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from './Pages/Home';
import Complated from './Pages/Complated';

const Tab = createBottomTabNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: '#D6D6D6',
            height: 70,
          },
          tabBarShowLabel: false,
        }}>
        <Tab.Screen
          name="TodosPage"
          component={Home}
          options={{
            tabBarIcon: ({focused}) => (
              <View style={focused ? styles.onPage : styles.page}>
                <Image source={require('../assets/home.png')} style={{}} />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="ComplatedPage"
          component={Complated}
          options={{
            tabBarIcon: ({focused}) => (
              <View style={focused ? styles.onPage : styles.page}>
                <Image source={require('../assets/check.png')} />
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Router;

const styles = StyleSheet.create({
  onPage: {
    backgroundColor: '#e6e6e6',
    width: 55,
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
  },
  page: {
    width: 55,
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
  },
});
