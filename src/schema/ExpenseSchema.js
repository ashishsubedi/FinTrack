export default class ExpenseSchema{
    static schema = {
        name: 'Expense',
        primaryKey: 'id',
        properties:{
            id: 'int',
            note: 'string',
            category : 'Category',
            amount: {type: 'float', default: 0},
            date: 'date'
        }
    };
}

