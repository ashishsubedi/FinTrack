import React, { Component } from 'react';
import { Container, Header, Tab, Tabs, TabHeading, Icon, Text, Left, Right, Button, Body, Title } from 'native-base';

import TransactionTab from './TransactionTab';

import { addExpense } from '../../backend/actions'
// import console = require('console');
// import console = require('console');

export default class AddTransactions extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selected: 'kitchen',
      amount: 10,
      note: ''
    }
  }
  handleAmount = (amount) => {
    this.setState({
      amount
    })
  }

  onValueChange = (value, note) => {
    this.setState({
      selected: value,
    });
  }

  handleNote = (note) => {
    this.setState({
      note
    })
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
            <Button transparent onPress={async () => {
              alert("add transactions to the panel");
              const data = await addExpense({
                value: this.state.selected,
                amount: this.state.amount,
                note: this.state.note
              });
              this.props.navigation.navigate('Home', data);
            }}>
              <Icon name='checkmark' style={{ fontSize: 35, color: '#fff' }} />
            </Button>
          </Right>
        </Header>
        <Tabs transparent>
          <Tab heading={<TabHeading><Icon name="logo-usd" /><Text>Expense</Text></TabHeading>}>
            <TransactionTab amount={this.state.amount} note={this.state.note} selected={this.state.selected} onValueChange={this.onValueChange} handleAmount={this.handleAmount} handleNote={this.handleNote} />
          </Tab>
          <Tab heading={<TabHeading><Icon name="card" /><Text>Income</Text></TabHeading>}>
            <TransactionTab amount={this.state.amount} note={this.state.note} selected={this.state.selected} onValueChange={this.onValueChange} handleAmount={this.handleAmount} handleNote={this.handleNote} />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

export { AddTransactions };