import { dincrement, ddecrement } from "../redux/dynamicCounter/actions"
import { useSelector, useDispatch } from "react-redux"
const DynamicHooksCounter = () => {
  const dispatch = useDispatch();
  const { value } = useSelector(state => state.dynamicCounter);

  const incrementFunc = (a) => {

    dispatch(dincrement(a))
  }

  const decrementFunc = (a) => {

    dispatch(ddecrement(a))
  }

  return (
    <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
      <div className="test-3xl font-bold">Dynamic Hook Counter</div>
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


export default DynamicHooksCounter;