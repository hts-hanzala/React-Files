import AppDispatcher from "./AppDispatcher"

let CountActions = {
    Increment : function(){
        AppDispatcher.dispatch({type:"INCREMENT"})
    },
    Decrement : function(){
        AppDispatcher.dispatch({type:"DECREMENT"})
    }
}

export default CountActions