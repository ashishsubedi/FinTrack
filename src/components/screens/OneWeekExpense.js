import React, { Component } from "react";
import { ImageBackground, View } from "react-native";
import bgImage from '../../../assets/background.jpg';
import { PickerIcon } from '../common';
import { CategoryIncomeChart, CategorySpentChart, Weekly } from '../Charts';
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
        List,
        ListItem, } from "native-base";
export default class OneWeekExpense extends Component {
  constructor(props){
    super(props);
    this.state = {
      amount: '$0.00',
      average: '$0.00',
      selected: 'income',
      label: 'Income',
      selected2: 'jan',
      label2: 'Jan',
      pickerItems:[
      {
        id:0,
        label: 'Income',
        value: 'income',
     },
     {
       id:1,
       label: 'Expense',
       value: 'expense',
     },
     {
       id:2,
       label: 'Transfer',
       value: 'transfer',
     },
     {
       id:3,
       label: 'Surplus',
       value: 'surplus',
     },
   ]
    }
  }
  onValueChange = (value, label)=>{
    this.setState({
      selected: value,
      label: label,
    });
  }
  onValueChange2 = (value, label)=>{
    this.setState({
      selected2: value,
      label2: label
    });
  }
  render() { return (
      <Container>
        <ImageBackground source={ bgImage } style={{ width: '100%', height: '100%' }}>
        <Header transparent style={{ marginTop: 20 }}>
          <Body style={{ marginLeft: 9 }}>
            <Title style={{ fontSize: 35 }}>One Week Expense</Title>
          </Body>
          <Right>
            <Button transparent onPress={() => alert("Show share panel")}>
              <Icon name='share' style={{fontSize: 35, color: '#fff'}} />
            </Button>
            <Button transparent onPress={() => alert("Show more panel")}>
              <Icon name='more' style={{fontSize: 35, color: '#fff'}} />
            </Button>
          </Right>
        </Header>
        <Content padder>
          <Card>
            
              <Weekly />
          </Card>
        </Content>
        </ImageBackground>
      </Container>

    );
  }
}
