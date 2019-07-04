import React, { Component } from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { Home, Stats, Profile, Budget } from './src/components';
import { Income } from './src/components/screens';
import {
  createAppContainer,
  createBottomTabNavigator,
  createStackNavigator
 } from 'react-navigation';



export default class App extends Component {
  render(){
    return (
        <AppContainer />
    )
  }
}

const HomeStack = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: ({navigation}) =>{
      return {
        headerTitle:'Home',
        headerLeft: (
          <Icon style={{ paddingLeft: 10 }}
            onPress={() => navigation.openDrawer()} name="md-menu"
            size={30} />
        )
      }
    }
  }
})

const StatsStack = createStackNavigator({
  Stats: {
    screen: Stats,
    navigationOptions:({navigation}) =>{
      return {
        headerTitle:'Stats',
        headerLeft: (
          <Icon style={{ paddingLeft: 10 }}
            onPress={() => navigation.openDrawer()} name="md-menu"
            size={30} />
        )
      }
    }
  }
});

const BudgetStack = createStackNavigator({
  Budget: {
    screen: Budget,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: 'Budget',
        headerLeft: (
          <Icon style={{ paddingLeft: 10 }}
            onPress={() => navigation.openDrawer()} name="md-menu"
            size={30} />
        )
      }
    }
  }
});

const ProfileStack = createStackNavigator({
  Profile: {
    screen: Profile,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: 'Profile',
        headerLeft: (
          <Icon style={{ paddingLeft: 10 }}
            onPress={() => navigation.openDrawer()} name="md-menu"
            size={30} />
        )
      }
    }
  }
});

const DashboardTabNavigator = createBottomTabNavigator({
  Home: HomeStack,
  Stats: StatsStack,
  Budget: BudgetStack,
  Profile: ProfileStack
},{
  navigationOptions:({navigation})=>{
    const {routeName} = navigation.state.routes[navigation.state.index]
    return {
      header: null,
      headerTitle: routeName
    };
  }
});

const AppContainer = createAppContainer(DashboardTabNavigator);
