import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteAction } from "../Store/action";

function Display2({ id, todo, isCompleted }) {
    const [isRead, setIsRead] = useState(true)
    const [atodo, setATodo] = useState(todo)
    const [Completed, setCompleted] = useState(isCompleted)
    const dispatch = useDispatch()
    const delTodo = () => {
        dispatch(deleteAction(id))
    }

    return (
        <div className="container mx-auto flex rounded-2xl justify-between bg-gray-800 my-3 p-4">
            <div className="flex gap-1 w-full">
                <input type="text" value={atodo} readOnly={isRead}
                onChange={(e)=>setATodo(e.target.value)}
                className={`flex-1 rounded mx-2 px-2 py-2 focus:outline-none ${Completed ? 'line-through' : 'no-underline'} ${isRead ? 'bg-transparent text-white' : 'bg-gray-100 text-black'}`} />

                <div className="flex items-center gap-2">
                    <input type="checkbox" id="completed" defaultChecked={Completed}
                        className="w-4 h-4"
                        disabled={!isRead}
                        onChange={() => setCompleted(curr => !curr)} />
                    <label className="" htmlFor="completed">Completed</label>
                </div>

            </div>


            <div className="flex items-center gap-2 mx-2">
                <button className={isRead?' rounded-xl bg-blue-600 hover:bg-blue-400 px-3 py-1 transition':'rounded-xl bg-green-600 hover:bg-green-400 px-3 py-1 transition'}
                disabled={Completed}
                onClick={()=>setIsRead(curr=>!curr)}>{isRead?"change":"update"}</button>
                <button className="bg-red-600 hover:bg-red-400 rounded-xl px-3 py-1 transition"
                onClick={delTodo}>Delete
                </button>
            </div>

        </div>
    )
}
export default Display2;