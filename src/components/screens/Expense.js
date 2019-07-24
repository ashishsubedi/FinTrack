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
import CardBox from '../common/CardBox'
import moment from 'moment'
import { StoreContext } from '../../context/StoreContext';
// import console = require('console');
export default class Expense extends Component {
  render() {
    return (
      <Container>
        <StoreContext.Consumer>
          {
            value => {

              return (
                <ImageBackground source={bgImage} style={{ width: '100%', height: '100%' }}>
                  <Header transparent style={{ marginTop: 20 }}>
                    <Left>
                      <Button transparent onPress={() => this.props.navigation.goBack()}>
                        <Icon name='ios-arrow-back' style={{ fontSize: 35, color: '#fff' }} />
                      </Button>
                    </Left>
                    <Body style={{ marginLeft: 9 }}>
                      <Title style={{ fontSize: 35 }}>Expense</Title>
                    </Body>

                  </Header>
                  <Content>
                    
                    <CardBox header="Expenses"
                    state={value.expense}
                   
                    data={value.expense}

                  />
                  </Content>
                </ImageBackground>
              )
            }
          }


        </StoreContext.Consumer>

      </Container>
    );
  }
}


