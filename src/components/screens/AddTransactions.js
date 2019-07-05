import React, { Component } from 'react';
import { Container, Header, Tab, Tabs, TabHeading, Icon, Text, Left, Right, Button, Body, Title } from 'native-base';

import TransactionTab from './TransactionTab';

import {addExpense} from '../../backend/actions'

export default class AddTransactions extends Component {

  constructor(props){
    super(props);
    this.state={
      selected: 'kitchen',
      label: 'Kitchen',
      amount: 10
    }
  }

  onValueChange = (value, label,amount)=>{
    this.setState({
      selected: value,
      label: label,
      amount: 10
    });
  }
  render() {
    return (
      <Container>
        <Header style={{ marginTop: 20 }}>
          <Left>
            <Button transparent onPress={() => alert("Show back panel")}>
              <Icon name='arrow-back' style={{ fontSize: 35, color: '#fff' }} />
            </Button>
          </Left>
          <Body style={{ marginLeft: 9 }}>
            <Title style={{ fontSize: 20 }}>Add Transactions</Title>
          </Body>
          <Right>
            <Button transparent onPress={() => {
              alert("add transactions to the panel");
              addExpense({
                value: this.state.selected,
                amount: this.state.amount
              });
              this.props.navigation.navigate('Home');
            }}>
              <Icon name='checkmark' style={{ fontSize: 35, color: '#fff' }} />
            </Button>
          </Right>
        </Header>
        <Tabs transparent>
          <Tab heading={<TabHeading><Icon name="logo-usd" /><Text>Expense</Text></TabHeading>}>
            <TransactionTab amount={this.state.amount} selected={this.state.selected} onValueChange={this.onValueChange} />
          </Tab>
          <Tab heading={<TabHeading><Icon name="card" /><Text>Income</Text></TabHeading>}>
            <TransactionTab amount={this.state.amount}  selected={this.state.selected} onValueChange={this.onValueChange} />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

export { AddTransactions };