import React, { Component } from "react";
import { ImageBackground } from "react-native";
import bgImage from '../../assets/background.jpg';
import { CardSection } from './common/CardSection';
import CardBox from './common/CardBox';
import { getExpenses, getIncomes } from '../backend/helpers'
import { StatusBar } from 'react-native';
import { CardInfo } from './common/CardInfo';

import { View, FlatList } from 'react-native'


import { NavigationEvents } from 'react-navigation';


import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Text,
  Body,
  Left,
  Right,
  Button,
  Title,
  Icon,
  Fab,
  List
} from "native-base";
import getRealm from "../services/realm";

import { addExpense } from '../backend/actions'



export default class Home extends Component {
  constructor(props) {
    super(props);
    //Get count and data from database and set it to that


    this.state = {

      //MOCK DATA.. USE DATABASE TO FETCH DATA  
      testExpense: [],
      userInfo: [],
      income: [],
      expense: []
    }

  };
  addExpense = (newData) => {

    // State change will cause component re-render

    this.setState({
      //count: this.state.count + 1,
      expense: this.state.expense.push(newData)
    });

  }
  addIncome = (newData) => {

    // State change will cause component re-render

    this.setState({
      //count: this.state.count + 1,
      income: this.state.income.push(newData)
    });

  }



  componentWillMount() {
    getRealm().then(async realm => {
      const exp = await getExpenses();
      const income = await getIncomes();
      const user = realm.objects('User');

      console.log(user)
      this.setState({
        expense: [...exp],
        userInfo: [...user],
        income:[...income]

      })
      console.log('UserData: ', this.state.userInfo);
    })
  }

  componentDidUpdate() {

  }

  componentDidMount() {
    StatusBar.setHidden(true);

  }
  expenseChange = (exp) => {
    this.setState({
      expense: [...this.state.expense, ...exp]
    })
  }

  render() {
    let loaded = 0;
    return (
      <Container>
        
        <ImageBackground source={bgImage} style={{ width: '100%', height: '100%' }}>
          <Header transparent style={{ marginTop: 20 }}>
            <Body style={{ marginLeft: 9 }}>
              <Title style={{ fontSize: 35 }}>Daily book</Title>
            </Body>
            <Right>
              <Button transparent onPress={() => alert("Show search panel")}>
                <Icon name='search' style={{ fontSize: 35, color: '#fff' }} />
              </Button>
              <Button transparent onPress={() => alert("Show more panel")}>
                <Icon name='more' style={{ fontSize: 35, color: '#fff' }} />
              </Button>
            </Right>
          </Header>

          <Content padder>
            <CardBox header="Net Balance"
              onPress={() => alert("Pressed")}
              data={this.state.userInfo}

            />
            <CardBox header="Expenses"
              state={this.state.expense}
              onPress={() => {
                this.props.navigation.navigate('Expense',
                  {data: Array.from(this.state.expense),});
              }}
              data={this.state.expense < 3 ? this.state.expense : this.state.expense.slice(0, 3)}

            />
          
            <CardBox header="Income"
              state={this.state.income}

              onPress={() => this.props.navigation.navigate('Income')}
              data={this.state.income < 3 ? this.state.income : this.state.income.slice(0, 3)} />

          </Content>
          <Fab
            style={{ backgroundColor: 'blue', marginBottom: 20 }}
            position="bottomRight"
            onPress={() => this.props.navigation.navigate('AddTransactions',{
              state:this.state
            })}>
            <Icon ios='ios-add' android="md-add" style={{ fontSize: 35, color: '#fff' }} />
          </Fab>
        </ImageBackground>
      </Container >
    );
  }

}
