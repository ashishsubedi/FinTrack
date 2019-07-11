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
  

  render() {
    const { header, data } = this.props;

    return (
      // <Card>
      //   <CardItem header bordered>
      //     <Text>{header}</Text>
      //   </CardItem>

      //   {data.map(item => (
      //     <CardInfo onPress={item.onPress} currency='Rs. '
      //       title={item.title || item.note}
      //       textNote={item.textNote}
      //       amount={item.amount}
      //       date={item.date}
      //       key={item.id}
      //     />
      //   ))}
      // </Card>
      <View>
        <CardItem header bordered>
          <Text>{header}</Text>
        </CardItem>
        <List>

          <FlatList
            data={data}
            extraData={this.props.state}
            renderItem={({ item }) =>(
              <CardInfo onPress={this.props.onPress} currency='Rs. '
                title={item.title || item.note}
                textNote={item.textNote}
                amount={item.amount}
                date={item.date}
                key={item.id}
              />)
            }
            keyExtractor={(item, index) => item.id.toString()}
          />
        </List>
      </View>
    );
  }
}
