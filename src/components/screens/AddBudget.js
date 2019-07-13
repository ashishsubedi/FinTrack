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
        CheckBox,
        Input,} from "native-base";
export default class AddBudget extends Component {
  constructor(props){
    super(props);
    this.state = {
      amount: '$0.00',
      selected: 'wage',
      label: 'Wage',
      pickerCategory:[
      {
        id:0,
        label: 'Wage',
        value: 'wage',
     },
     {
       id:1,
       label: 'Food And Drinks',
       value: 'foodAndDrink',
     },
     {
       id:2,
       label: 'Transport',
       value: 'transport',
     },
     {
       id:3,
       label: 'Kitchen',
       value: 'kitchen',
     },
     {
       id:4,
       label: 'Rent',
       value: 'rent',
     },
     {
       id:5,
       label: 'Study',
       value: 'study',
     },
     {
       id:6,
       label: 'Miscellaneous',
       value: 'miscellaneous',
     },
      ]
    }
  }
  onValueChange = (value, label)=>{
    this.setState({
      selected: value,
      label: label,
    });
  }
  render() { return (
      <Container>
        <ImageBackground source={ bgImage } style={{ width: '100%', height: '100%' }}>
        <Header transparent style={{ marginTop: 20 }}>
          <Body style={{ marginLeft: 9 }}>
            <Title style={{ fontSize: 35 }}>New Budget</Title>
          </Body>
          <Right>
            <Button transparent onPress={() => alert("Show more panel")}>
              <Icon name='checkmark' style={{fontSize: 35, color: '#fff'}} />
            </Button>
          </Right>
        </Header>
        <Content padder>
          <Card>
            <List>
              <ListItem>
                <Body>
                  <PickerIcon pickerItems={this.state.pickerCategory}  selected={this.state.selected} onValueChange={this.onValueChange} />
                </Body>
              </ListItem>
              <ListItem>
                <Body>
                  <Text>Amount</Text>
                  <Item>
                    <Text style={{ fontSize:24,color: 'green'}}>$</Text>
                    <Input placeholder="Tap to add amount" style={{ fontSize: 24, color: 'red' }}/>
                  </Item>
                </Body>
              </ListItem>
              <ListItem>
                <Body style={{marginBottom: 10}}>
                  <Text>Budget balance goes to next month</Text>
                </Body>
                <CheckBox checked={true}/>
              </ListItem>
            </List>
          </Card>
          <Button block success  style={{marginTop: 15}}><Text>OK</Text></Button>
        </Content>
        </ImageBackground>
      </Container>
    );
  }
}
