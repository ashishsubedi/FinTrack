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

/**ColorScaleOur length should be more than the length of monthlySpent and monthlyIncome*/
const colorScaleOur = ['#d7dbdd', '#aed6f1', '#f7dc6f', '#76d7c4', '#DAF7A6', '#f5b7b1', '#d7bde2', '#eb984e']



/**CHANGE REQUIRED*/

/**Add data in month variable from back end in similar pattern i.e as a dictionary.
 *  x variable stores category and y variable stores the monthly expenditure in that particular category */

const monthlySpent = [
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
const monthlyIncome = [
  { x: "Salary", y: 30000 },
  { x: "Rent", y: 20000 }
]


/**NO CHANGE is required in this section*/

const legenddataspent = []
for (i = 0; i < monthlySpent.length; i++) {
  legenddataspent.push({ name: monthlySpent[i].x + '(Rs.' + monthlySpent[i].y + ')', symbol: { fill: colorScaleOur[i] } })
};
const legenddataincome = []
for (i = 0; i < monthlyIncome.length; i++) {
  legenddataincome.push({ name: monthlyIncome[i].x + '(Rs.' + monthlySpent[i].y + ')', symbol: { fill: colorScaleOur[i] } })
};



/**CHANGE REQUIRED*/

/**DATA SHOULD BE ADDED FROM DATABASE IN SIMILAR PATTERN
 * Here data stores the information on weekly basis. 
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



/**This is the component to export monthly expenditure chart which is in PIE format */


/**NO CHANGE is required here , given that the data in the above variable is stored accordingly i.e in list of dictionary with same key. */
export class MonthlySpentChart extends Component {
  render() {
    return (
      <View style={styles.ViewCss}>
        <VictoryPie
          colorScale={colorScaleOur}
          data={monthlySpent}
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
              tickFormat={["  Sun", "  Mon", "  Tue", "  Wed", '  thur', '  Fri', '  Sat']}
            />

            <VictoryAxis
              dependentAxis

              tickFormat={(d) => (` `)}
            />
            <VictoryBar

              alignment="start"
              cornerRadius={{ top: 5 }}

              x="day"
              y="expenditure"
              labelComponent={<VictoryLabel dy={15} dx={-50} alignment="start" angle={270} />}

              animate={{ duration: 1000, onLoad: { duration: 1000 }, delay: 500 }}
              style={{ labels: { fill: "black", fontSize: 13 }, data: { fill: "#89cff0", width: 18 } }}

              data={weeklyData}

              labels={(d) => `Rs.${d.expenditure}`}


            />
          </VictoryContainer>
        </VictoryChart>
      </View>
    )
  }
}


/**This is the component to export monthly income chart which is in PIE format */


/**NO CHANGE is required here , given that the data in the above variable is stored accordingly i.e in list of dictionary with same key. */


export class MonthlyIncomeChart extends Component {
  render() {
    return (
      <View style={styles.ViewCss}>
        <VictoryPie
          colorScale={colorScaleOur}
          data={monthlyIncome}
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