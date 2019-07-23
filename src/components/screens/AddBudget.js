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

  render() {
    return (
      <Container>
        <ImageBackground source={bgImage} style={{ width: '100%', height: '100%' }}>
          <Header transparent style={{ marginTop: 20 }}>
            <Body style={{ marginLeft: 9 }}>
              <Title style={{ fontSize: 35 }}>New Budget</Title>
            </Body>
            <Right>
              <Button transparent onPress={
                async () => {
                  const futureDate = Moment().add(1, 'M');
                  const currentDate = Moment();
                  const timeInterval = currentDate.diff(futureDate,'days')
                  // const  budget = await addBudget({
                  //   value: this.state.selected,
                  //   amount: this.state.amount,
                  //   timeInterval: futureDate - Moment()
                  // });
                  alert("Success!");
                  this.props.navigation.navigate('Budget', {
                    amount: this.state.amount, selected: this.state.selected,
                    timeInterval: timeInterval
                  });
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
                    <PickerIcon pickerItems={this.state.pickerCategory} selected={this.state.selected} onValueChange={this.onValueChange} />
                  </Body>
                </ListItem>
                <ListItem>
                  <Body>
                    <Text>Amount</Text>
                    <Item>
                      <Text style={{ fontSize: 24, color: 'green' }}>$</Text>
                      <Input placeholder="Tap to add amount" style={{ fontSize: 24, color: 'red' }} keyboardType={'number-pad'} />
                    </Item>
                  </Body>
                </ListItem>
                <ListItem>
                  <Body style={{ marginBottom: 10 }}>
                    <Text>Budget balance goes to next month</Text>
                  </Body>

                  <CheckBox checked={true} />
                </ListItem>
                <CardItem footer bordered>
                  <DatePicker onDateChange={this.onDateChange} />
                </CardItem>
              </List>
            </Card>
            <Button block success style={{ marginTop: 15 }} onPress={async () => {

              
                const futureDate = Moment(this.state.date).add(1, 'M');
                // const  budget = await addBudget({
                //   value: this.state.selected,
                //   amount: this.state.amount,
                //   timeInterval: futureDate - Moment()
                // });
                alert("Success!");
                this.props.navigation.navigate('Budget', {
                  amount: this.state.amount, selected: this.state.selected,
                  timeInterval: futureDate - Moment()
                });
              }

            } >
              <Text>OK</Text></Button>
          </Content>
        </ImageBackground>
      </Container>
    );
  }
}
