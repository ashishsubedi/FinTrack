export default class PredictionSchema{
    static schema = {
        name: 'Prediction',
        primaryKey: 'id',
        properties:{
            id: 'int',
            time : 'date',
            amount : {type: 'float', default: 0}
        }
    };
}

