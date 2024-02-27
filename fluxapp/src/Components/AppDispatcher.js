import { Dispatcher } from "flux";
let dispatcher = new Dispatcher()
dispatcher.handleAction = function(action){
    this.dispatch(action)
}

export default dispatcher