import AppDispatcher from "./AppDispatcher"
import objectAssign from "object-assign"
import EventEmitter from "events"

let change = "change"
let count = 0

let CountStore = objectAssign({}, EventEmitter.prototype, {
    getCount: function () {
        return count
    },
    emitChange : function(){
        this.emit(change)
    },
    addChangeListener : function (callback){
        this.on(change,callback)
    },
    dispatchToken : AppDispatcher.register(function(action){
        switch(action.type){
            case "INCREMENT":
                count = count + 1
                CountStore.emitChange()
                break
            case "DECREMENT":
                count = count - 1
                CountStore.emitChange()
                break
        }
    })
})

export default CountStore