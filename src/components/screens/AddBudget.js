import React, { Component } from "react";
import { ImageBackground, View } from "react-native";
import bgImage from '../../../assets/background.jpg';
import { PickerIcon } from '../common';
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
  List,
  ListItem,
  Item,
  DatePicker,

  CheckBox,
  Input,
} from "native-base";
import { addBudget } from "../../backend/actions";
import { StoreContext } from '../../context/StoreContext.js'

import Moment from 'moment';

export default class AddBudget extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: 0,
      selected: 'wage',
      note: '',
      date: '',
      pickerCategory: [
        {
          id: 0,
          label: 'Wage',
          value: 'wage',
        },
        {
          id: 1,
          label: 'Food And Drinks',
          value: 'foodAndDrink',
        },
        {
          id: 2,
          label: 'Transport',
          value: 'transport',
        },
        {
          id: 3,
          label: 'Kitchen',
          value: 'kitchen',
        },
        {
          id: 4,
          label: 'Rent',
          value: 'rent',
        },
        {
          id: 5,
          label: 'Study',
          value: 'study',
        },
        {
          id: 6,
          label: 'Miscellaneous',
          value: 'miscellaneous',
        },
      ]
    }
  }
  onDateChange = (date) => {
    this.setState({ date: date })
  }
  handleAmount = amount => {
    this.setState({
      amount
    });
  };


  render() {
    return (
      <Container>
        <StoreContext.Consumer>
          {value => {
            return (
              <React.Fragment>
                <ImageBackground source={bgImage} style={{ width: '100%', height: '100%' }}>
                  <Header transparent style={{ marginTop: 20 }}>
                    <Body style={{ marginLeft: 9 }}>
                      <Title style={{ fontSize: 35 }}>New Budget</Title>
                    </Body>
                    <Right>
                      <Button transparent onPress={
                        async () => {
                          const futureDate = Moment(this.state.date).add(1, 'M');
                          const currentDate = Moment();
                          const budget = await addBudget({
                            value: this.state.selected,
                            amount: this.state.amount,
                            timeInterval: futureDate.diff(currentDate, 'days')
                          })
                          console.log("BUDGETTT: ", budget)
                          alert("Success!");
                          value.refreshApiData();
                          this.props.navigation.navigate('Budget');
                        }

                      } >
                        <Icon name='checkmark' style={{ fontSize: 35, color: '#fff' }} />
                      </Button>
                    </Right>
                  </Header>
                  <Content padder>
                    <Card>
                      <List>

                        <ListItem>
                          <Body>
                            <Text>Amount</Text>
                            <Item>
                              <Text style={{ fontSize: 24, color: 'green' }}>Rs</Text>
                              <Input placeholder="Tap to add amount" style={{ fontSize: 24, color: 'red' }} keyboardType={'number-pad'} onChangeText={this.handleAmount} />
                            </Item>
                          </Body>
                        </ListItem>
                        <ListItem>
                          <Body style={{ marginBottom: 10 }}>
                            <Text>Budget balance goes to next month (30 days) of date: </Text>
                          </Body>
                        </ListItem>
                        <CardItem footer bordered>
                          <DatePicker onDateChange={this.onDateChange} />
                        </CardItem>
                      </List>
                    </Card>
                    <Button block success style={{ marginTop: 15 }} onPress={async () => {

                      const futureDate = Moment(this.state.date).add(1, 'M');
                      const currentDate = Moment();
                      const budget = await addBudget({
                        value: this.state.selected,
                        amount: this.state.amount,
                        timeInterval: futureDate.diff(currentDate, 'days')
                      })
                      console.log("BUDGETTT: ", budget)
                      alert("Success!");
                      value.refreshApiData();
                      this.props.navigation.navigate('Budget');
                    }

                    } >
                      <Text>OK</Text></Button>
                  </Content>
                </ImageBackground>
              </React.Fragment>
            )
          }}

        </StoreContext.Consumer>

      </Container>
    );
  }
}
