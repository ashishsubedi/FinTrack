import React, { Component } from "react";
import { ImageBackground } from "react-native";
import { CategoryIncomeChart, CategorySpentChart, Weekly } from '../Charts'


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


export default class ChartDetails extends Component {
    render() {
        return (
            <Container style={{ backgroundColor: '#CCC' }}>
                <Header transparent style={{ marginTop: 20 }}>
                    <Body style={{ marginLeft: 9 }}>
                        <Title style={{ fontSize: 35 }}>One-week expense</Title>
                    </Body>
                </Header>

                <Card noShadow={true} >
                    <CardItem>
                        <Title style={{ fontSize: 25 }}>Category expense</Title>
                        <CategorySpentChart />

                    </CardItem>
                </Card>
                {/*
            <Card noShadow={true} >
                <CardItem>
                    <Title style={{ fontSize: 25 }}>Category income</Title>
                    <CategorySpentChart/>
                </CardItem>        
            </Card>

*/}
                <Card>
                    <CardItem>
                        <Title style={{ fontSize: 25 }}>Daily Stats</Title>
                        <Weekly />
                    </CardItem>
                </Card>
            </Container>
        )
    }
}