import { addTodo,deleteTodo, updateTodo } from "./actionType";
const initialState = []
function reducer(state = initialState,action){
    switch(action.type){
        case addTodo:
            return [...state,{id:Date.now(),todo:action.payload,isCompleted:false}]
        case deleteTodo:
            return state.filter( todo => todo.id !== action.id)     
        case updateTodo:
           let todo = state.map(todo => todo.id === action.payload.id)
           todo.todo = action.payload.todo
           return [...state,todo]
        default:
            return state
    }
}
export default reducer;