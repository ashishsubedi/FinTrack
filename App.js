import React, { Component } from 'react';
// import { StyleSheet, Text, View, ImageBackground } from 'react-native';
//import { Home, Stats, Profile, Budget } from './src/components';
import Home from './src/components/Home'
import Stats from './src/components/Stats'
import Profile from './src/components/Profile'
import Budget from './src/components/Budget'
import Income from './src/components/screens/Income'
import Expense from './src/components/screens/Expense'
import ShowGraph from './src/components/screens/ShowGraph'
import AddBudget from './src/components/screens/AddBudget'
import AddTransactions from './src/components/screens/AddTransactions'
//import { Income, Expense, AddTransactions } from './src/components/screens';
import { CategoryIncomeChart, CategorySpentChart, Weekly } from './src/components/Charts'
import ChartDetails from './src/components/screens/ChartDetails'


//React navigation
import { createAppContainer, createStackNavigator, createBottomTabNavigator } from 'react-navigation'






export default class App extends Component {

  constructor(props) {
    super(props);
    //Load data from database
    this.state = {
      data: [
        {
          id: 0,
          category: 'Food And Drinks',
          title: 'Khaja',
          amount: 30,
          currency: 'Rs',
          date: Date.now()
        },
        {
          id: 1,
          category: 'Food And Drinks',
          title: 'Khaja',
          amount: 60,
          currency: 'Rs',
          date: Date.now()
        },
        {
          id: 2,
          category: 'Food And Drinks',
          title: 'Khaja',
          amount: 60,
          currency: 'Rs',
          date: Date.now()
        }, {
          id: 3,
          category: 'Food And Drinks',
          title: 'Khaja',
          amount: 60,
          currency: 'Rs',
          date: Date.now()
        }, {
          id: 4,
          category: 'Food And Drinks',
          title: 'Khaja',
          amount: 60,
          currency: 'Rs',
          date: Date.now()
        }, {
          id: 5,
          category: 'Food And Drinks',
          title: 'Khaja',
          amount: 60,
          currency: 'Rs',
          date: Date.now()
        }, {
          id: 6,
          category: 'Food And Drinks',
          title: 'Khaja',
          amount: 60,
          currency: 'Rs',
          date: Date.now()
        }, {
          id: 7,
          category: 'Food And Drinks',
          title: 'Khaja',
          amount: 60,
          currency: 'Rs',
          date: Date.now()
        }, {
          id: 8,
          category: 'Food And Drinks',
          title: 'Khaja',
          amount: 60,
          currency: 'Rs',
          date: Date.now()
        }, {
          id: 9,
          category: 'Food And Drinks',
          title: 'Khaja',
          amount: 60,
          currency: 'Rs',
          date: Date.now()
        }, {
          id: 10,
          category: 'Food And Drinks',
          title: 'Khaja',
          amount: 60,
          currency: 'Rs',
          date: Date.now()
        }, {
          id: 11,
          category: 'Food And Drinks',
          title: 'Khaja',
          amount: 60,
          currency: 'Rs',
          date: Date.now()
        },
      ]
    }


  }
  render() {

    return (
      <ShowGraph />
    )
  }
}



const HomeStackNavigator = createStackNavigator({
  Home,
  Income,
  Expense,
  AddTransactions
}, {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
  });

const StatsStackNavigator = createStackNavigator({
  Stats,
}, {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
  });

const BudgetStackNavigator = createStackNavigator({
  Budget,
}, {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
  });
const ProfileStackNavigator = createStackNavigator({
  Profile,
}, {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
  });
const TabNavigator = createBottomTabNavigator({
  Home: HomeStackNavigator,
  Stats: StatsStackNavigator,
  Budget: BudgetStackNavigator,
  Profile: ProfileStackNavigator
}, {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
  });

const AppContainer = createAppContainer(TabNavigator);
