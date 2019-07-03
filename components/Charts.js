import React, { Component } from 'react';
import {View,StyleSheet} from 'react-native';
import { VictoryBar,VictoryChart,VictoryAxis ,VictoryTheme,VictoryLabel,VictoryContainer,VictoryPie,VictoryLegend} from "victory-native";

const styles = StyleSheet.create({
  ViewCss: {
    padding:10 
  },
  BarCSS:{
    width:200
  }
});
const colorScaleOur=['#d7dbdd','#aed6f1','#f7dc6f','#76d7c4','#DAF7A6','#f5b7b1','#d7bde2','#eb984e']

const month=[
  { x: "Clothes",y: 3000,labels:1},
  { x: "Food", y: 4000,labels:2 },
  { x: "Tax", y: 200,labels:3},
  { x: "Transportation", y: 2500,labels:4 },
  { x: "Travel", y: 400,labels:5 },
  { x: "Mobile", y: 100,labels:6 }
]

const legenddata=[]

for(i=0;i<month.length;i++)
{
legenddata.push({name:month[i].x+'(Rs.'+month[i].y+')',symbol:{fill:colorScaleOur[i]}})};

const data =[
    {day: 1, expenditure: 130},
    {day: 2, expenditure: 165},
    {day: 3, expenditure: 142},
    {day: 4, expenditure: 190},
    {day: 5, expenditure: 190},
    {day: 6, expenditure: 190},
    {day: 7, expenditure: 190},
  ] ;
export class Monthly extends Component{
    render(){
        return(
            <View style={styles.ViewCss}>
                                        <VictoryPie
                                          colorScale={colorScaleOur}
                                          data={month}
                                          labels={(d) => ``}
                                          
                                        />
                                         <VictoryLegend x={5} 
                                          itemsPerRow={2}
                                            title="Legend"
                                            centerTitle
                                            
                                            orientation="horizontal"
                                            style={{ border: { stroke: "black" }, title: {fontSize: 20 } }}
                                            
                                            data={legenddata}
                                          />
            </View>
        )
    }
}

export class Weekly extends Component{
  render(){
      return(
          <View style={styles.ViewCss}>

<VictoryChart  theme={VictoryTheme.material}  
                            
                            >
                              <VictoryContainer  style={styles.BarCSS}>
                                <VictoryAxis
                                                tickValues={[0,1,2,3,4,5,6]}
                                                tickFormat={["  Sun", "  Mon", "  Tue", "  Wed",'  thur','  Fri','  Sat']}
                                        />
                                        
                                        <VictoryAxis
          dependentAxis
          // tickFormat specifies how ticks should be displayed
          tickFormat={(d) => (` `)}
        />
                                <VictoryBar  
                                                
                                                alignment="start"
                                                cornerRadius={{ top: 5 }}
                                                                 
                                                x="day"
                                                y="expenditure"
                                                labelComponent={<VictoryLabel dy={15} dx={-50}  alignment="start" angle={270}/>}
                                                                                
                                                animate={{ duration: 1000, onLoad: { duration: 1000 },delay:500 }}                           
                                                style={{labels:{fill:"black" ,fontSize: 13, fontWeight: "bold"},data: {fill:"#89cff0",width:18}}}

                                                data={data}

                                                labels={(d)=>`Rs.${d.expenditure}`}
                                                
                                
                                />
                          </VictoryContainer>
                          
                            
                        
                         </VictoryChart>
                               </View>
                               )
                           }
                       }