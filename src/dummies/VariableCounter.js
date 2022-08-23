import { connect } from "react-redux";
import { increment, decrement } from "./counter/actions";
import { dincrement, ddecrement } from "./dynamicCounter/actions";
const VariableCounter = ({ count, increment, decrement }) => {


  return (
    <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
      <div className="text-2xl font-semibold" id="VariableCounter">{count}</div>
      <div className="flex space-x-3">

        <button
          className="bg-red-400 text-white px-3 py-2 rounded shadow"
          id="decrement"
          onClick={() => decrement(5)}
        >
          Decrement
        </button>
        <button
          className="bg-indigo-400 text-white px-3 py-2 rounded shadow"
          id="increment"
          onClick={() => increment(5)}
        >
          Increment
        </button>
      </div>
    </div>
  )
}

//connect is a higher order function it returns a higher order component
//HOC=>its a funciton that takes a component as a parameter and returns a new component
//const NewComponent=HOC(originalCOmponent)
//connect() will return a HOC

const mapStateToProps = (state, { dynamic }) => {//state,assigned own props
  if (dynamic)
    return {
      count: state.dynamicCounter.value
    }
  else
    return {
      count: state.counter.value
    }
}
const mapDispatchToProps = (dispatch, { dynamic }) => {//dispatch function,assigned own props
  console.log("comming here mtop")
  return {
    increment: (value) => dispatch(dynamic ? dincrement(value) : increment(value)),//dispatch ask for a increment
    decrement: (value) => dispatch(dynamic ? ddecrement(value) : decrement(value))//dispatch ask for a increment

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(VariableCounter)//Counter component is getting conneciton with react-redux using the connect() funciton