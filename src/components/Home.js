import React, { Component } from "react";
import { ImageBackground } from "react-native";
import bgImage from '../../assets/background.jpg';
import { CardSection } from './common/CardSection';
import CardBox from './common/CardBox';
// import { CardInfo } from './common/CardInfo';

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
  Fab
} from "native-base";
class Home extends Component {
  constructor(props) {
    super(props);
    //Get count and data from database and set it to that

    this.state = {

      //MOCK DATA.. USE DATABASE TO FETCH DATA  
      income: [
        {
          id: 0,
          currency: "Rs.",
          title: "This Week",
          textNote: '',
          amount: 30,
          date: Date.now()
        },
        {
          id: 1,
          currency: "Rs.",
          title: "Last Week",
          textNote: 'Noted',
          amount: 70,
          date: Date.now()

        }
      ],
      expense: [
        {
          id: 0,
          currency: "Rs.",
          title: "This Week",
          textNote: '',
          amount: 30,
          date: Date.now()

        },
        {
          id: 1,
          currency: "Rs.",
          title: "Last Week",
          textNote: 'Noted',
          amount: 70,
          date: Date.now()

        },
        {
          id: 2,
          currency: "Rs.",
          title: "Last Week",
          textNote: 'Noted',
          amount: 70,
          date: Date.now()

        },
        {
          id: 3,
          currency: "Rs.",
          title: "Last Week",
          textNote: 'Noted',
          amount: 70,
          date: Date.now()

        }
      ]
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

  render() {
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
            <CardBox header="Expenses"
              onPress={() => alert("Pressed")}
              data={this.state.expense < 3 ? this.state.expense : this.state.expense.slice(0, 3)} />

            <CardBox header="Income"
              onPress={() => alert("Pressed")}
              data={this.state.income < 3 ? this.state.income : this.state.income.slice(0, 3)} />

          </Content>
          <Fab
            style={{ backgroundColor: 'blue', marginBottom: 20 }}
            position="bottomRight"
            onPress={() => alert("Show input panel")}>
            <Icon ios='ios-add' android="md-add" style={{ fontSize: 35, color: '#fff' }} />
          </Fab>
        </ImageBackground>
      </Container>
    );
  }
}

export { Home };
