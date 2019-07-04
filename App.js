import React, { Component } from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { Home, Stats, Profile, Budget, Dashboard } from './src/components';
import { Income, Expense } from './src/components/screens';
import { MonthlyIncomeChart, MonthlySpentChart } from './src/components/Charts'



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
        },{
          id: 3,
          category: 'Food And Drinks',
          title: 'Khaja',
          amount: 60,
          currency: 'Rs',
          date: Date.now()
        },{
          id: 4,
          category: 'Food And Drinks',
          title: 'Khaja',
          amount: 60,
          currency: 'Rs',
          date: Date.now()
        },{
          id: 5,
          category: 'Food And Drinks',
          title: 'Khaja',
          amount: 60,
          currency: 'Rs',
          date: Date.now()
        },{
          id: 6,
          category: 'Food And Drinks',
          title: 'Khaja',
          amount: 60,
          currency: 'Rs',
          date: Date.now()
        },{
          id: 7,
          category: 'Food And Drinks',
          title: 'Khaja',
          amount: 60,
          currency: 'Rs',
          date: Date.now()
        },{
          id: 8,
          category: 'Food And Drinks',
          title: 'Khaja',
          amount: 60,
          currency: 'Rs',
          date: Date.now()
        },{
          id: 9,
          category: 'Food And Drinks',
          title: 'Khaja',
          amount: 60,
          currency: 'Rs',
          date: Date.now()
        },{
          id: 10,
          category: 'Food And Drinks',
          title: 'Khaja',
          amount: 60,
          currency: 'Rs',
          date: Date.now()
        },{
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
      <Home />
    )
  }
}
