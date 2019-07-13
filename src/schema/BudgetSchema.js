export default class BudgetSchema{
    static schema = {
        name: 'Budget',
        primaryKey: 'id',
        properties:{
            id: 'int',
            amount: {type: 'float', default: 0},
            timeInteval: 'float',
            createdDate: 'date'
        }
    };
}

