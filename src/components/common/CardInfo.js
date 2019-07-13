import React from "react";
import {
    
    CardItem,
    Text,
    Body,
    Right,
    
} from "native-base";
import Moment from 'react-moment';

export default class CardInfo extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { onPress, currency, title, textNote, amount, date } = this.props;
        return (
            <CardItem button onPress={onPress}>
                <Body>
                    <Text>{title}</Text>
                    <Text note>{textNote}</Text>
                </Body>
                <Right>
                    <Text>{currency} {amount}</Text>

                    <Moment note element={Text} format="YYYY/MM/DD HH:mm">
                        {date}
                    </Moment>

                </Right>
            </CardItem>
        );
    }
}
