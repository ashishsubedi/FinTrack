import React, { Component } from 'react';
import { ImageBackground } from "react-native";
import bgImage from '../../../assets/background.jpg';
import {
  Container,
  List,
  ListItem,
  TextContainer,
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
  Icon
} from 'native-base';

import { View, FlatList } from 'react-native'

import CardInfo from '../common/CardInfo';
import moment from 'moment'
// import console = require('console');
export default class Expense extends Component {
  render() {
    let data = this.props.navigation.getParam('data', [{
      title: 'No Item Found',
      id: 0, textNote: '',
      date: moment().format()
    }]);
    
    console.log("DATA TYPE:",typeof(data));
    return (
      <Container>
        <ImageBackground source={bgImage} style={{ width: '100%', height: '100%' }}>
          <Header transparent style={{ marginTop: 20 }}>
            <Left>
              <Button transparent onPress={() => alert("Show back panel")}>
                <Icon name='ios-arrow-back' style={{ fontSize: 35, color: '#fff' }} />
              </Button>
            </Left>
            <Body style={{ marginLeft: 9 }}>
              <Title style={{ fontSize: 35 }}>Expense</Title>
            </Body>

          </Header>
          <Content>
            {/* <List style={{ marginTop: 10, fontSize: 18 }}>
              {
                data.map((item) =>
                  (
                    <CardInfo
                      key={item.id}
                      title={item.title}
                      textNote={item.category}
                      amount={item.amount}
                      currency={item.currency}
                      date={item.date}
                    />
                  )
                )
              }
            </List> */}

            <List>
              {console.log("DATA:", data)}

              <FlatList
                data={data}
                renderItem={({ item }) => (
                  <CardInfo
                    key={item.id}
                    title={item.title}
                    textNote={item.category}
                    amount={item.amount}
                    currency={item.currency}
                    date={item.date}
                  />)
                }
                keyExtractor={(item, index) => item.id.toString()}
              />
            </List>
          </Content>
        </ImageBackground>
      </Container>
    );
  }
}


