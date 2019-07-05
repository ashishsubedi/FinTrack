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

import CardInfo from '../common/CardInfo';
export default class Income extends Component {
  render() {
    const { data } = this.props;
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
              <Title style={{ fontSize: 35 }}>Income</Title>
            </Body>
            <Right>
              <Button transparent onPress={() => alert("Show search panel")}>
                <Icon name='search' style={{ fontSize: 35, color: '#fff' }} />
              </Button>
            </Right>
          </Header>
          <Content>
            <List style={{ marginTop: 10, fontSize: 18 }}>
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
            </List>
          </Content>
        </ImageBackground>
      </Container>
    );
  }
}

