import { useState } from 'react'

const Counter = ({ object, id, increment, decrement }) => {

  console.log(object.count)

  return (
    <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
      <div className="text-2xl font-semibold" id="counter">{object.count}</div>
      <div className="flex space-x-3">

        <button
          className="bg-red-400 text-white px-3 py-2 rounded shadow"
          id="decrement"
          onClick={() => decrement(object.id)}
        >
          Decrement
        </button>
        <button
          className="bg-indigo-400 text-white px-3 py-2 rounded shadow"
          id="increment"
          onClick={() => increment(object.id)}
        >
          Increment
        </button>
      </div>
    </div>
  )
}

export default Counter