import React, { Component } from "react";
import { ImageBackground } from "react-native";
import bgImage from '../../assets/background.jpg';
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
  DatePicker,
  Fab
} from "native-base";

import { StoreContext } from "../context/StoreContext.js"


import { CardInfo } from './common/CardInfo';
import Moment from 'moment';



export default class Budget extends Component {

  constructor(props) {
    super(props);
    this.state = {
      amount: 0,
      selected: 'wage',
      note: 'Budget',
      data: []
    }
  }
  onValueChange = (value) => {
    this.setState({
      selected: value,
    });
  }
  handleNote = (note) => {
    this.setState({
      note
    })
  }
  handleAmount = (amount) => {
    this.setState({
      amount
    })
  }

  render() {

    if (this.props.navigation.state.params != null) {
      amount = this.props.navigation.getParam('amount', 0);
      selected = this.props.navigation.getParam('selected', 'wage');
      timeInterval = this.props.navigation.getParam('timeInterval', 0);
      this.state.data[0] = {
        amount, selected, timeInterval
      }
      console.log(this.state)
    }
    return (
      <Container>
        <StoreContext.Consumer>
          {
            value => {
              return (
                <ImageBackground source={bgImage} style={{ width: '100%', height: '100%' }}>
                  <Header transparent style={{ marginTop: 20 }}>
                    <Body style={{ marginLeft: 9 }}>
                      <Title style={{ fontSize: 35 }}>Budget</Title>
                    </Body>
                  </Header>
                  <Content padder>
                    <Card>
                      <CardItem header bordered>
                        <Text>Your Budget?</Text>
                      </CardItem>
                      {/* <CardItem bordered button onPress={() => alert("Show wage panel")}>
                <Body>
                  <Text>Today</Text>
                </Body>
                <Right>
                  <Text>$0.00</Text>
                </Right>
              </CardItem>
              <CardItem bordered button onPress={() => alert("Show wage panel")}>
                <Body>
                  <Text>This month</Text>
                </Body>
                <Right>
                  <Text>$0.00</Text>
                </Right>
              </CardItem>
              <CardItem bordered button onPress={() => alert("Show wage panel")}>
                <Body>
                  <Text>This year</Text>
                </Body>
                <Right>
                  <Text>$0.00</Text>
                </Right>
              </CardItem> */}


                      {value.budget.map(item => (
                        <CardInfo currency='Rs. '
                          title={item.title || item.note || item.name}
                          textNote={item.textNote || ''}
                          amount={item.amount || item.balance}
                          date={item.date || Moment().format()}
                          key={item.id || 0}
                        />
                      ))
                      }


                    </Card>
                  </Content>
                  <Fab
                    style={{ backgroundColor: '#4F42B5', marginBottom: 20 }}
                    position="bottomRight"
                    onPress={() => this.props.navigation.navigate('AddBudget')}>
                    <Icon ios='ios-add' android="md-add" style={{ fontSize: 35, color: '#fff' }} />
                  </Fab>
                </ImageBackground>
              )
            }
          }
        </StoreContext.Consumer>

      </Container>
    );
  }
}
