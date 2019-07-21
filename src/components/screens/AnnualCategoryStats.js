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
export default class AnnualCategoryStats extends Component {
  constructor(props){
    super(props);
    this.state = {
      amount: '$0.00',
      average: '$0.00',
      selected: 'income',
      label: 'Income',
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
  render() { return (
      <Container>
        <ImageBackground source={ bgImage } style={{ width: '100%', height: '100%' }}>
        <Header transparent style={{ marginTop: 20 }}>
          <Body style={{ marginLeft: 9 }}>
            <Title style={{ fontSize: 35 }}>Annual Category Stats</Title>
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
            </List>
          </Card>
        </Content>
        </ImageBackground>
      </Container>

    );
  }
}
