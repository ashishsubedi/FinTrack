import React from "react";
import {

  Card,
  CardItem,
  Text,
  List,

} from "native-base";
import { View, FlatList } from 'react-native'

import CardInfo from './CardInfo';
// import console = require("console");

export default class CardBox extends React.Component {
  
  constructor(props){
    super(props);
    this.state={
      
    }
  }

  render() {
    const { header, data } = this.props;
    let loaded = 0;
    return (
      <Card>
        <CardItem header bordered>
          <Text>{header}</Text>
        </CardItem>

        {data.map(item => (
          <CardInfo onPress={this.props.onPress} currency='Rs. '
            title={item.title || item.note|| item.name}
            textNote={item.textNote}
            amount={item.amount||item.balance}
            date={item.date}
            key={item.id}
          />
        ))}
      </Card>
      // <View>
      //   <CardItem header bordered>
      //     <Text>{header}</Text>
      //   </CardItem>
      //   <List>
      //     <FlatList
      //       data={data}
      //       extraData={this.props.state}
      //       renderItem={({ item }) =>(
      //         <CardInfo onPress={this.props.onPress} currency='Rs. '
      //           title={item.title || item.note ||item.name}
      //           textNote={item.textNote}
      //           amount={item.amount||item.balance}
      //           date={item.date}
      //           key={item.id}
      //         />)
      //       }
      //       keyExtractor={(item, index) => item.id.toString()}
      //     />
      //   </List>
      // </View>
    );
  }
}
