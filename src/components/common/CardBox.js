import React from "react";
import {

  Card,
  CardItem,
  Text,
  
} from "native-base";

import CardInfo from './CardInfo';

export default class CardBox extends React.Component {
  

  render() {
    const {header, data} = this.props;
    return (
      <Card>
        <CardItem header bordered>
          <Text>{header}</Text>
        </CardItem>
        {data.map(item => (
          <CardInfo onPress={item.onPress} currency={item.currency}
            title={item.title}
            textNote={item.textNote}
            amount={item.amount}
            date={item.date}
            key={item.id}
          />
        ))}
      </Card>
    );
  }
}
