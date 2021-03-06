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
  Icon
} from "native-base";

import { NavigationEvents } from 'react-navigation';

import { CategoryIncomeChart, CategorySpentChart, Weekly } from './Charts'

export default class Stats extends Component {
  render() {
    return (

      <Container style={{ backgroundColor: '#CCC' }}>
        <ImageBackground source={bgImage} style={{ width: '100%', height: '100%' }}>
          <Header transparent style={{ marginTop: 20 }}>
            <Body style={{ marginLeft: 9 }}>
              <Title style={{ fontSize: 35 }}>Stats</Title>
            </Body>
          </Header>
          <Content>
            <Card noShadow={true} >
              <CardItem button onPress={() => this.props.navigation.navigate('ShowGraph')}>
                <Left style={{ margin: 10 }}>
                  <Icon name='trending-up' style={{ fontSize: 35, color: '#000', marginRight: 15 }} />
                  <Body>
                    <Text style={{ fontSize: 21 }}>Daily Trends</Text>
                    <Text note>View daily stats for a month </Text>
                  </Body>
                </Left>
              </CardItem>
              {/* Daily Trend DATA


              */}
            </Card>
            <Card noShadow={true} >
              <CardItem button onPress={() => this.props.navigation.navigate('OneWeekExpense')}>
                <Left style={{ margin: 10 }}>
                  <Icon name='ios-analytics' style={{ fontSize: 38, color: '#000', marginRight: 15 }} />
                  <Body>
                    <Text style={{ fontSize: 21 }}>One-week expense</Text>
                    <Text note>View weekly spend report </Text>
                  </Body>
                </Left>
              </CardItem>
            </Card>

            <Card noShadow={true} >
              <CardItem button onPress={() => this.props.navigation.navigate('MonthlyCategoryStats')}>
                <Left style={{ margin: 10 }}>
                  <Icon name='ios-analytics' style={{ fontSize: 38, color: '#000', marginRight: 15 }} />
                  <Body>
                    <Text style={{ fontSize: 21 }}>Monthly Category Stats</Text>
                    <Text note>View category stats within one month</Text>
                  </Body>
                </Left>
              </CardItem>
            </Card>
           
            
          </Content>
        </ImageBackground>
      </Container>
    );
  }
}

export { Stats };
