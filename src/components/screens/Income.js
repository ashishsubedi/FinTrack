import React, { Component } from 'react';
import { ImageBackground } from "react-native";
import bgImage from '../../../assets/background.jpg';
import CardBox from '../common/CardBox'

import { StoreContext } from '../../context/StoreContext';

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
                    
                    <CardBox header="Incomes"
                    state={value.income}
                    
                    data={value.income}

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

