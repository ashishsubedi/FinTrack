import React, { Component } from 'react';
// import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { Home, Stats, Profile, Budget } from './src/components';
import { Income, Expense, AddTransactions } from './src/components/screens';
// import { MonthlyIncomeChart, MonthlySpentChart } from './src/components/Charts'


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
      <AppContainer />
    )
  }
}

const TabNavigator = createBottomTabNavigator({
  Home: HomeStackNavigator,
  Stats: StatsStackNavigator,
  Budget: BudgetStackNavigator,
  Profile: ProfileStackNavigator,
});

const HomeStackNavigator = createStackNavigator({
  Home,
  Income,
  Expense,
  AddTransactions
});

const StatsStackNavigator = createStackNavigator({
  Stats,
});

const BudgetStackNavigator = createStackNavigator({
  Budget,
});
const ProfileStackNavigator = createStackNavigator({
  Profile,
});

const AppContainer = createAppContainer(TabNavigator);
