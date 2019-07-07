import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme, VictoryLabel, VictoryContainer, VictoryPie, VictoryLegend } from "victory-native";



const styles = StyleSheet.create({
  ViewCss: {
    padding: 10
  },
  BarCSS: {
    width: 200
  }
});



/**CHANGE MAY BE REQUIRED*/

/**ColorScaleOur length should be more than the length of CategorySpent and CategoryIncome*/
const colorScaleOur = ['#d7dbdd', '#aed6f1', '#f7dc6f', '#76d7c4', '#DAF7A6', '#f5b7b1', '#d7bde2', '#eb984e']



/**CHANGE REQUIRED*/

/**Add data in month variable from back end in similar pattern i.e as a dictionary.
 *  x variable stores category and y variable stores the monthly expenditure in that particular category */

const CategorySpent = [
  { x: "Clothes", y: 3000 },
  { x: "Food", y: 4000 },
  { x: "Tax", y: 200 },
  { x: "Transportation", y: 2500 },
  { x: "Travel", y: 400 },
  { x: "Mobile", y: 100 }
]

/**CHANGE REQUIRED*/

/**Add data in month variable from back end in similar pattern i.e as a dictionary.
 *  x variable stores category and y variable stores the monthly expenditure in that particular category */
const CategoryIncome = [
  { x: "Salary", y: 30000 },
  { x: "Rent", y: 20000 }
]


/**NO CHANGE is required in this section*/

const legenddataspent = []
for (i = 0; i < CategorySpent.length; i++) {
  legenddataspent.push({ name: CategorySpent[i].x + '(Rs.' + CategorySpent[i].y + ')', symbol: { fill: colorScaleOur[i] } })
};
const legenddataincome = []
for (i = 0; i < CategoryIncome.length; i++) {
  legenddataincome.push({ name: CategoryIncome[i].x + '(Rs.' + CategoryIncome[i].y + ')', symbol: { fill: colorScaleOur[i] } })
};




/**CHANGE REQUIRED*/

/**DATA SHOULD BE ADDED FROM DATABASE IN SIMILAR PATTERN
 * Here data stores the information on weekly basis. 
 * 

 * day 1 refers to sunday, day 2 refers to monday and so on accordinly.
 * expenditure refers to the total expenditure in that particular day.
 */

const weeklyData = [
  { day: 1, expenditure: 130 },
  { day: 2, expenditure: 165 },
  { day: 3, expenditure: 142 },
  { day: 4, expenditure: 190 },
  { day: 5, expenditure: 190 },
  { day: 6, expenditure: 190 },
  { day: 7, expenditure: 190 },
];
const days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
const legenddata = []
for (i = 0; i < weeklyData.length; i++) {
  legenddata.push({ name: days[i] + '(Rs.' + weeklyData[i].expenditure + ')' ,symbol: { fill: colorScaleOur[1] }})
};



/**This is the component to export monthly expenditure chart which is in PIE format */


/**NO CHANGE is required here , given that the data in the above variable is stored accordingly i.e in list of dictionary with same key. */
export class CategorySpentChart extends Component {
  render() {
    return (
      <View style={styles.ViewCss}>
        <VictoryPie
          colorScale={colorScaleOur}
          data={CategorySpent}
          labels={(d) => ``}

        />
        <VictoryLegend x={5}
          itemsPerRow={2}
          title="Legend"
          centerTitle

          orientation="horizontal"
          style={{ border: { stroke: "black" }, title: { fontSize: 20 } }}

          data={legenddataspent}
        />
      </View>
    )
  }
}



/**This is the component to export weekly expenditure chart which is in BAR format */

/**NO CHANGE is required here , given that the data in the above variable is stored accordingly i.e in list of dictionary with same key. */

export class Weekly extends Component {
  render() {
    return (
      <View style={styles.ViewCss}>

        <VictoryChart theme={VictoryTheme.material} >
          <VictoryContainer style={styles.BarCSS}>
            <VictoryAxis
              tickValues={[0, 1, 2, 3, 4, 5, 6]}
              tickFormat={["  Sun", "  Mon", "  Tue", "  Wed", '  Thur', '  Fri', '  Sat']}
            />

            <VictoryAxis
              dependentAxis
              tickValues={[0, 1, 2]}
              tickFormat={[1,0.5,0]}
            />
            <VictoryBar
              y={0}
              alignment="start"
              cornerRadius={{ top: 5 }}

              x="day"
              y="expenditure"
              
              
              style={{ data: { fill: "#89cff0", width: 18 } }}
              data={weeklyData}

             


            />
        
      
      
          </VictoryContainer>
        </VictoryChart>
        <VictoryLegend x={80} y={0}
          itemsPerRow={1}         
          orientation="horizontal"
          style={{ data: { fontSize:30 } }}

          data={legenddata}
        />
      </View>
    )
  }
}


/**This is the component to export monthly income chart which is in PIE format */


/**NO CHANGE is required here , given that the data in the above variable is stored accordingly i.e in list of dictionary with same key. */


export class CategoryIncomeChart extends Component {
  render() {
    return (
      <View style={styles.ViewCss}>
        <VictoryPie
          colorScale={colorScaleOur}
          data={CategoryIncome}
          labels={(d) => ``}

        />
        <VictoryLegend x={5}
          itemsPerRow={2}
          title="Legend"
          centerTitle

          orientation="horizontal"
          style={{ border: { stroke: "black" }, title: { fontSize: 20 } }}

          data={legenddataincome}
        />
      </View>
    )
  }
}
