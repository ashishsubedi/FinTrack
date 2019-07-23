import React,{createContext,createState,useEffect} from "react"
import getRealm from "../services/realm.js"
import { getExpenses, getIncomes } from '../backend/helpers'
export const StoreContext=createContext()


export class Store extends React.Component{

  state={income:[],expense:[],userInfo:[]}

  componentWillMount=()=>{
    //make api call for the first time//
    getRealm().then(async realm => {
      const expense= await getExpenses();
      const income = await getIncomes();
      const user = realm.objects('User');

      this.setState({income,expense})

    })
  }


  refreshApiData=()=>{
    //make api call again and set api data//
    getRealm().then(async realm => {
      const expense = await getExpenses();
      const income = await getIncomes();
      const user = realm.objects('User');

      console.log(income,expense)
      this.setState({income,expense})

    })
  }

  render(){

    return(
      <StoreContext.Provider value={{refreshApiData:this.refreshApiData,income:this.state.income,expense:this.state.expense,userInfo:this.state.userInfo}}>
        {this.props.children}
      </StoreContext.Provider>
    )
  }
}
