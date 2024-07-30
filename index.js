const redux = require('redux');
const createStore = redux.legacy_createStore; 

const CAKE_ORDERED = 'CAKE_ORDERED'
const CAKE_RESTOCKED = 'CAKE_RESTOCKED'


function orderCake(){
    return{
    type: CAKE_ORDERED,
    quantity:1
}
}
function restockCake(qty = 1){
    return{
    type: CAKE_RESTOCKED,
    quantity:qty
}
}

const initialState = {
    numOfCakes:10,
}

const reducer =(state = initialState, action) => {
    switch (action.type){
        case CAKE_ORDERED:
            return{
                numOfCakes:state.numOfCakes -1,
            }
            case CAKE_RESTOCKED:
                return{
                    ...state,
                    numOfCakes : state.numOfCakes + action.quantity 
                }
            default:
                return state
    }
}

const store = createStore(reducer)  

console.log('Initial state',store.getState());

const unsubscribe = store.subscribe(() => console.log('update state',store.getState()))

store.dispatch(orderCake())
store.dispatch(orderCake())
store.dispatch(orderCake())
store.dispatch(restockCake(3))
unsubscribe();