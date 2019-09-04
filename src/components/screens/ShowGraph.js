import React, { Component } from "react";
import { ImageBackground, View } from "react-native";
import bgImage from '../../../assets/background.jpg';
import { PickerIcon } from '../common';
import { CategoryIncomeChart, CategorySpentChart, Weekly, MonthlyLine } from '../Charts';
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
export default class ShowGraph extends Component {
  constructor(props){
    super(props);
    this.state = {
      amount: 'Rs. 7030.00',
      average: 'Rs. 440.00',
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
   ],
   pickerMonths:[
     {
       id:0,
       label: 'Jan',
       value: 'jan',
    },
    {
      id:1,
      label: 'Feb',
      value: 'feb',
    },
    {
      id:2,
      label: 'Mar',
      value: 'mar',
    },
    {
      id:3,
      label: 'Apr',
      value: 'apr',
    },
    {
      id:4,
      label: 'May',
      value: 'may',
    },
    {
      id:5,
      label: 'Jun',
      value: 'jun',
    },
    {
      id:6,
      label: 'Jul',
      value: 'jul',
    },
    {
      id:7,
      label: 'Aug',
      value: 'aug',
    },
    {
      id:8,
      label: 'Sep',
      value: 'sep',
    },
    {
      id:9,
      label: 'Oct',
      value: 'oct',
    },
    {
      id:10,
      label: 'Nov',
      value: 'nov',
    },
    {
      id:11,
      label: 'Dec',
      value: 'dec',
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
            <Title style={{ fontSize: 35 }}>Daily Trend</Title>
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
            <List>
              <ListItem>
                <Body>
                  <PickerIcon pickerItems={this.state.pickerItems} selected={this.state.selected} onValueChange={this.onValueChange} />
                </Body>
              </ListItem>
              <ListItem>
                <Body>
                  <Text>Accounts</Text>
                  <Icon name='arrow-down' style={{fontSize: 20, color: '#fff'}} />
                </Body>
              </ListItem>
              <ListItem>
                <Body>
                  <PickerIcon pickerItems={this.state.pickerMonths} selected={this.state.selected2} onValueChange={this.onValueChange2} />
                </Body>
              </ListItem>
            </List>
            <CardItem  style={{ textAlign: 'center'}}>
              <Body style={{ alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{ fontSize: 30, color: 'green'}}>{this.state.amount}</Text>
                <Text style={{ fontSize: 18, color: 'grey' }}>Total Surplus</Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Icon name='square' style={{color: 'green'}} />
                <Text style={{ fontSize: 18 }}>Average Daily Surplus</Text>
              </Left>
              <Right>
              <Text style={{ fontSize: 24, color: 'green'}}>{this.state.average}</Text>
              </Right>
            </CardItem>
              <MonthlyLine/>
          </Card>
        </Content>
        </ImageBackground>
      </Container>

    );
  }
}
