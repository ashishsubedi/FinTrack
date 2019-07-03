export default class IncomeSchema{
    static schema = {
        name: 'Income',
        primaryKey: 'id',
        properties:{
            id: 'int',
            category : 'Category',
            amount: {type: 'int', default: 0},
            date: 'date'
        }
    };
}

