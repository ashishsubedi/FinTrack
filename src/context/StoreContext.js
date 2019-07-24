import React, { createContext, } from "react"
import getRealm from "../services/realm.js"
import { getExpenses, getIncomes, getBudget, getBudgets } from '../backend/helpers'
export const StoreContext = createContext()


export class Store extends React.Component {

  state = {
    income: [],
    expense: [],
    userInfo: [],
    budget : []
  }

  componentWillMount = () => {
    //make api call for the first time//
    getRealm().then(async realm => {
      const expense = await getExpenses();
      const income = await getIncomes();
      const budget = await getBudgets();
      const user = realm.objects('User');
      console.log("USER: ", user)
      console.log("BUDget 2: ", budget)
      this.setState({ income, expense, userInfo: user, budget })

    })
  }


  refreshApiData = () => {
    //make api call again and set api data//
    getRealm().then(async realm => {
      const expense = await getExpenses();
      const income = await getIncomes();
      const budget = await getBudgets();
      const user = realm.objects('User');

      console.log(income, expense)
      this.setState({ income, expense, userInfo: user, budget })

    })
  }

  render() {

    return (
      <StoreContext.Provider value={{ refreshApiData: this.refreshApiData, income: this.state.income, expense: this.state.expense, userInfo: this.state.userInfo, budget: this.state.budget }}>
        {this.props.children}
      </StoreContext.Provider>
    )
  }
}
