import React, { Component } from "react";
import {
  Container,
  Header,
  Tab,
  Tabs,
  TabHeading,
  Icon,
  Text,
  Left,
  Right,
  Button,
  Body,
  Title
} from "native-base";

import TransactionTab from "./TransactionTab";
import {StoreContext} from '../../context/StoreContext.js'

import { addExpense, addIncome } from "../../backend/actions";
// import console = require('console');
// import console = require('console');

export default class AddTransactions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: "kitchen",
      amount: 10,
      note: ""
    };
  }
  handleAmount = amount => {
    this.setState({
      amount
    });
  };

  onValueChange = (value, note) => {
    this.setState({
      selected: value
    });
  };

  handleNote = note => {
    this.setState({
      note
    });
  };

  render() {
    let state = this.props.navigation.getParam("state", {});
    return (
      <Container>
        <StoreContext.Consumer>
          {value => {
            return (
              <React.Fragment>
                <Header style={{ marginTop: 20 }}>
                  <Left>
                    <Button
                      transparent
                      onPress={() => this.props.navigation.goBack()}
                    >
                      <Icon
                        name="arrow-back"
                        style={{ fontSize: 35, color: "#fff" }}
                      />
                    </Button>
                  </Left>
                  <Body style={{ marginLeft: 9 }}>
                    <Title style={{ fontSize: 20 }}>Add Transactions</Title>
                  </Body>
                  <Right>
                    <Button
                      transparent
                      onPress={async () => {
                        alert("add transactions to the panel");
                      }}
                    >
                      <Icon
                        name="checkmark"
                        style={{ fontSize: 35, color: "#fff" }}
                      />
                    </Button>
                  </Right>
                </Header>
                <Tabs transparent>
                  <Tab
                    heading={
                      <TabHeading>
                        <Icon name="logo-usd" />
                        <Text>Expense</Text>
                      </TabHeading>
                    }
                  >
                    <TransactionTab
                      save={async () => {
                        const data = await addExpense({
                          value: this.state.selected,
                          amount: this.state.amount,
                          note: this.state.note
                        });
                        value.refreshApiData()
                        this.props.navigation.navigate("Home");
                      }}
                      amount={this.state.amount}
                      note={this.state.note}
                      selected={this.state.selected}
                      onValueChange={this.onValueChange}
                      handleAmount={this.handleAmount}
                      handleNote={this.handleNote}
                    />
                  </Tab>
                  <Tab
                    heading={
                      <TabHeading>
                        <Icon name="card" />
                        <Text>Income</Text>
                      </TabHeading>
                    }
                  >
                    <TransactionTab
                      save={async () => {
                        const data = await addIncome({
                          value: this.state.selected,
                          amount: this.state.amount,
                          note: this.state.note
                        });
                        this.props.navigation.navigate("Home");
                      }}
                      amount={this.state.amount}
                      note={this.state.note}
                      selected={this.state.selected}
                      onValueChange={this.onValueChange}
                      handleAmount={this.handleAmount}
                      handleNote={this.handleNote}
                    />
                  </Tab>
                </Tabs>
              </React.Fragment>
            );
          }}
        </StoreContext.Consumer>
      </Container>
    );
  }
}

export { AddTransactions };
