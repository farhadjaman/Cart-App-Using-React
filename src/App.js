import { useState } from 'react';
import './App.css';
import Counter from './components/Counter';
import Stats from './components/Stats';

const initialState = [
  {
    id: 1,
    count: 0,
  },
  {
    id: 2,
    count: 0
  }
]
function App() {
  const [state, setState] = useState(initialState);

  const totalCount = () => {
    return state.reduce((total, currEl) => total + currEl.count, 0)
  }
  const increment = (id) => {
    const updatedState = state.map(ob => {
      if (ob.id === id) {
        return { ...ob, count: ob.count + 1 }
      }
      else {
        return { ...ob }
      }
    })

    setState(updatedState)
  };
  const decrement = (id) => {

    const updatedState = state.map(ob => {
      if (ob.id === id) {
        console.log("comming here")
        return { ...ob, count: ob.count - 1 }
      }
      else {
        return { ...ob }
      }
    })
    setState(updatedState)
  };


  return (
    <div className="App">
      <div className="w-screen h-screen p-10 bg-gray-100 text-slate-700">

        <h1 className="max-w-md mx-auto text-center text-2xl font-bold">
          Simple Counter Application
        </h1>
        <div className="max-w-md mx-auto mt-10 space-y-5">

          {/* counter component */}

          {state.map(ob => <Counter key={ob.id} object={ob} increment={increment} decrement={decrement} />)}
          <Stats count={totalCount()} />
        </div>
      </div>

    </div>
  );
}

export default App;
