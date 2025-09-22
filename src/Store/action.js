import { addTodo,deleteTodo,updateTodo } from "./actionType"
export function addAction(todo){
    return(
        { 
            type: addTodo,
            payload:todo
        }
    ) 
}
export function deleteAction(id){
    return(
        {
            type:deleteTodo,
            id:id
        }
    )
}
export function updateAction(todo){
    return(
        {
            type:updateTodo,
            payload:todo
        }
    )
}