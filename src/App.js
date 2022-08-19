
import './App.css';
import HooksCounter from './components/HooksCounter';
import DynamicHooksCounter from './components/DynamicHooksCounter'
import { Provider } from 'react-redux'
import store from './redux/store'
import VariableCounter from './components/VariableCounter';
function App() {

  return (
    <Provider store={store}>
      <div className="App">
        <div className="w-screen h-screen p-10 bg-gray-100 text-slate-700">

          <h1 className="max-w-md mx-auto text-center text-2xl font-bold">
            Simple Counter Application
          </h1>
          <div className="max-w-md mx-auto mt-10 space-y-5">

            {/* counter component */}
            {/* <HooksCounter /> */}
            {/* <DynamicHooksCounter /> */}
            <VariableCounter />
            <VariableCounter dynamic />
            {/* {state.map(ob => <Counter key={ob.id} object={ob} increment={increment} decrement={decrement} />)}
          <Stats count={totalCount()} /> */}
          </div>
        </div>

      </div>
    </Provider>

  );
}

export default App;
