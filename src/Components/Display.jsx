import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { deleteAction, updateAction } from '../Store/action'
export default function Display({id,todo,isCompleted}) {
    const dispatch  = useDispatch()
    const [completed,setCompleted] = useState(isCompleted)
    const [atodo,setATodo] = useState(todo)
    const [read,setRead] = useState(true)
    const delTodo = ()=>{
        dispatch(deleteAction(id))
    }
    const updateTodo = ()=>{
        setRead(false)
        //dispatch(updateAction({id:id,todo:atodo,isCompleted:completed}))
    }
  return (
    <div className='container mx-auto px-2 bg-gray-400 text-white'>
        
      <input 
      className='px-2 py-1 mx-2 my-1'
      type='text' value={atodo} readOnly={read}/>

    <input 
    className='mx-2'
    type='checkbox' id='isCompleted' checked={completed} 
    disabled={!read}
    onChange={()=>(setCompleted( current => !current))}/>
    <label className='mx-2' htmlFor='isCompleted'>Completed</label>

    {read?<button className='mx-2 px-2 py-1 bg-blue-700 hover:bg-blue-400 hover:font-bold rounded' onClick={()=>setRead(false)} >Change</button>
    :<button className='mx-2 px-2 py-1 bg-blue-700 hover:bg-blue-400 hover:font-bold rounded' onClick={()=>{updateTodo()}}>Update</button>}
    <button className='mx-2 px-2 py-1 bg-blue-700 hover:bg-blue-400 hover:font-bold rounded' onClick={delTodo}>Delete</button>
    </div>
  )
}
