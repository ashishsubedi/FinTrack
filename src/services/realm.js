import Realm from 'realm';

import UserSchema from '../schema/UserSchema';
import BudgetSchema from '../schema/BudgetSchema';
import ExpenseSchema from '../schema/ExpenseSchema';
import IncomeSchema from '../schema/IncomeSchema';
import PredictionSchema from '../schema/PredictionSchema';
import CategorySchema from '../schema/CategorySchema';



export default function getRealm(){
    return Realm.open({
        schema: [UserSchema, BudgetSchema, ExpenseSchema, IncomeSchema, PredictionSchema, CategorySchema]
    });
}