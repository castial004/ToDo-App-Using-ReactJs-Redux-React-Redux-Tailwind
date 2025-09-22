import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addAction } from '../Store/action'

const Input = () => {
  const dispatch = useDispatch()
  const [a_ToDo, setA_Todo] = useState('')

  const addTodoToStore = () => {
    if (a_ToDo.trim() === '') return
    dispatch(addAction(a_ToDo))
    setA_Todo('')
  }

  return (
    <div className="container mx-auto my-6 p-4 bg-gray-800 text-white rounded-2xl shadow-md flex items-center gap-3">
      <input
        type="text"
        value={a_ToDo}
        placeholder="Enter a To-Do"
        onChange={(e) => setA_Todo(e.target.value)}
        className="flex-1 px-3 py-2 rounded-lg bg-gray-100 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        onClick={addTodoToStore}
        className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 transition"
      >
        Add
      </button>
    </div>
  )
}

export default Input
