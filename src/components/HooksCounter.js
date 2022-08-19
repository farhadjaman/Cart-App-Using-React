import { increment, decrement } from "../redux/counter/actions"
import { useSelector, useDispatch } from "react-redux"
const HooksCounter = () => {
  const dispatch = useDispatch();
  const { value } = useSelector(state => state.counter);

  const incrementFunc = (a) => {
    dispatch(increment(a))
  }

  const decrementFunc = (a) => {
    dispatch(decrement(a))
  }

  return (
    <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
      <div className="text-2xl font-semibold">{value}</div>
      <div className="flex space-x-3">

        <button
          className="bg-red-400 text-white px-3 py-2 rounded shadow"
          id="decrement"
          onClick={() => decrementFunc(5)}
        >
          Decrement
        </button>
        <button
          className="bg-indigo-400 text-white px-3 py-2 rounded shadow"
          id="increment"
          onClick={() => incrementFunc(5)}
        >
          Increment
        </button>
      </div>
    </div>
  )
}


export default HooksCounter;