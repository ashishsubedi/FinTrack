import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Platform
} from "react-native";
import {Icon} from 'native-base';
//import { Home, Stats, Profile, Budget } from './src/components';
import Home from "./src/components/Home";
import Stats from "./src/components/Stats";
import Profile from "./src/components/Profile";
import Budget from "./src/components/Budget";
import Income from "./src/components/screens/Income";
import Expense from "./src/components/screens/Expense";
import ShowGraph from "./src/components/screens/ShowGraph";
import AddBudget from "./src/components/screens/AddBudget";
import OneWeekExpense from "./src/components/screens/OneWeekExpense";
import MonthlyCategoryStats from "./src/components/screens/MonthlyCategoryStats";
import AnnualCategoryStats from "./src/components/screens/AnnualCategoryStats";
import AddTransactions from "./src/components/screens/AddTransactions";
//import { Income, Expense, AddTransactions } from './src/components/screens';

import Moment from 'moment'

// <<<<<<< HEAD
import {
  CategoryIncomeChart,
  CategorySpentChart,
  Weekly
} from "./src/components/Charts";
import ChartDetails from "./src/components/screens/ChartDetails";
// =======
// import { CategoryIncomeChart, CategorySpentChart, Weekly, MonthlyLine } from './src/components/Charts'
// import ChartDetails from './src/components/screens/ChartDeatils'
// >>>>>>> ae47110eec4c0b143e47ddd18b935c22592ac2e3

//
import { getCategoriesCount, recordCategory, getBudget } from "./src/backend/helpers";
import { Store } from "./src/context/StoreContext.js";

//React navigation
import {
  createAppContainer,
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";
import getRealm from "./src/services/realm";
import { addBudget } from "./src/backend/actions";
// import console = require('console');

export default class App extends Component {
  constructor(props) {
    super(props);
    //Load data from database
    this.state = {
      categoriesCount: 0,
      realm: null,
      data: [
        {
          id: 0,
          category: "Food And Drinks",
          title: "Khaja",
          amount: 30,
          currency: "Rs",
          date: Date.now()
        },
        {
          id: 1,
          category: "Food And Drinks",
          title: "Khaja",
          amount: 60,
          currency: "Rs",
          date: Date.now()
        },
        {
          id: 2,
          category: "Food And Drinks",
          title: "Khaja",
          amount: 60,
          currency: "Rs",
          date: Date.now()
        },
        {
          id: 3,
          category: "Food And Drinks",
          title: "Khaja",
          amount: 60,
          currency: "Rs",
          date: Date.now()
        },
        {
          id: 4,
          category: "Food And Drinks",
          title: "Khaja",
          amount: 60,
          currency: "Rs",
          date: Date.now()
        },
        {
          id: 5,
          category: "Food And Drinks",
          title: "Khaja",
          amount: 60,
          currency: "Rs",
          date: Date.now()
        },
        {
          id: 6,
          category: "Food And Drinks",
          title: "Khaja",
          amount: 60,
          currency: "Rs",
          date: Date.now()
        },
        {
          id: 7,
          category: "Food And Drinks",
          title: "Khaja",
          amount: 60,
          currency: "Rs",
          date: Date.now()
        },
        {
          id: 8,
          category: "Food And Drinks",
          title: "Khaja",
          amount: 60,
          currency: "Rs",
          date: Date.now()
        },
        {
          id: 9,
          category: "Food And Drinks",
          title: "Khaja",
          amount: 60,
          currency: "Rs",
          date: Date.now()
        },
        {
          id: 10,
          category: "Food And Drinks",
          title: "Khaja",
          amount: 60,
          currency: "Rs",
          date: Date.now()
        },
        {
          id: 11,
          category: "Food And Drinks",
          title: "Khaja",
          amount: 60,
          currency: "Rs",
          date: Date.now()
        }
      ]
    };
  }
  componentWillMount() {
    /* getRealm().then(realm => {

      realm.beginTransaction();
      realm.deleteModel('Expense');
      realm.deleteModel('Income');
      realm.deleteModel('Budget');
      realm.deleteModel('Prediction');
      realm.deleteModel('User');
      realm.commitTransaction();

  }) */
    getCategoriesCount()
      .then(length => {
        if (length == 0) {
          recordCategory({ id: 0, name: "wage", icon: "" });
          recordCategory({ id: 1, name: "foodAndDrinks", icon: "" });
          recordCategory({ id: 2, name: "transport", icon: "" });
          recordCategory({ id: 3, name: "kitchen", icon: "" });
          recordCategory({ id: 4, name: "rent", icon: "" });
          recordCategory({ id: 5, name: "study", icon: "" });
          recordCategory({ id: 6, name: "misceallaneous", icon: "" });
        }
      })
      .catch(err => {
        throw new Error("Category Creation Failed: ", e);
      });
    getRealm()
      .then(realm => {
        const length = realm.objects("User").length;
        if (length == 0) {
          const data = {
            id: 0,
            name: "User",
            balance: 0.0
          };

          realm.write(() => {
            realm.create("User", data, true);
          });
        }
      })
      .catch(err => {
        throw new Error("User Creation Failed: ", e);
      });
  }

  render() {
    return (
      <Store>
        <AppContainer />
      </Store>
    );
  }
}

const HomeStackNavigator = createStackNavigator(
  {
    Home,
    Income,
    Expense,
    AddTransactions
  },
  {
    headerMode: "none",
    navigationOptions: {
      headerVisible: false,
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-home" size={15}/>
      )
    }
  }
);

const StatsStackNavigator = createStackNavigator(
  {
    Stats,
    ShowGraph,
    OneWeekExpense,
    MonthlyCategoryStats,
    AnnualCategoryStats
  },
  {
    headerMode: "none",
    navigationOptions: {
      headerVisible: false,
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-pie" size={15}/>
      )
    }
  }
);

const BudgetStackNavigator = createStackNavigator(
  {
    Budget,
    AddBudget
  },
  {
    headerMode: "none",
    navigationOptions: {
      headerVisible: false,
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-paper" size={15}/>
      )
    }
  }
);
const ProfileStackNavigator = createStackNavigator(
  {
    Profile
  },
  {
    headerMode: "none",
    navigationOptions: {
      headerVisible: false,
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-person" size={15}/>
      )
    }
  }
);
const TabNavigator = createBottomTabNavigator(
  {
    Home: HomeStackNavigator,
    Stats: StatsStackNavigator,
    Budget: BudgetStackNavigator,
    Profile: ProfileStackNavigator
  },
  {
    headerMode: "none",
    navigationOptions: {
      headerVisible: false
    }
  }
);

const AppContainer = createAppContainer(TabNavigator);
