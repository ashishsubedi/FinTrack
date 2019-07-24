import React, { Component,useContext } from "react";
import { ImageBackground } from "react-native";
import bgImage from '../../assets/background.jpg';
import { CardSection } from './common/CardSection';
import CardBox from './common/CardBox';
import { getExpenses, getIncomes } from '../backend/helpers'
import { StatusBar } from 'react-native';
import { CardInfo } from './common/CardInfo';

import { View, FlatList } from 'react-native'
import {StoreContext} from "../context/StoreContext.js"


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
      expense: value.expense.push(newData)
    });

  }
  addIncome = (newData) => {

    // State change will cause component re-render

    this.setState({
      //count: this.state.count + 1,
      income: value.income.push(newData)
    });

  }



  componentWillMount() {
  }

  componentDidUpdate() {

  }

  componentDidMount() {
    StatusBar.setHidden(true);

  }

  expenseChange = (exp) => {

  }

  render() {
    let loaded = 0;
    return (
      <Container>
      <StoreContext.Consumer>
        {
          (value)=>{
            return (
              <ImageBackground source={bgImage} style={{ width: '100%', height: '100%' }}>
                <Header transparent style={{ marginTop: 20 }}>
                  <Body style={{ marginLeft: 9 }}>
                    <Title style={{ fontSize: 35 }}>Daily book</Title>
                  </Body>
                  
                </Header>

                <Content padder>
                  <CardBox header="Net Balance"
                    onPress={() => alert("Pressed")}
                    data={value.userInfo}

                  />
                  <CardBox header="Expenses"
                    state={value.expense}
                    onPress={() => {
                      this.props.navigation.navigate('Expense',
                        {data: Array.from(value.expense),});
                    }}
                    data={value.expense < 3 ? value.expense : value.expense.slice(0, 3)}

                  />

                  <CardBox header="Income"
                    state={value.income}

                    onPress={() => this.props.navigation.navigate('Income')}
                    data={value.income < 3 ? value.income : value.income.slice(0, 3)} />

                </Content>
                <Fab
                  style={{ backgroundColor: '#4F42B5', marginBottom: 20 }}
                  position="bottomRight"
                  onPress={() => this.props.navigation.navigate('AddTransactions',{
                    state:this.state
                  })}>
                  <Icon ios='ios-add' android="md-add" style={{ fontSize: 35, color: '#fff' }} />
                </Fab>
              </ImageBackground>
            )
          }
        }
      </StoreContext.Consumer>
      </Container >
    );
  }

}
