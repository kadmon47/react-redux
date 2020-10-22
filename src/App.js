import React from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {increment,decrement,login} from './actions';


function App() {
  const counter = useSelector(state => state.counter);
  const islogged = useSelector(state => state.islogged);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>hello world</h1>
      {counter}
      <button onClick={() => dispatch(increment(5))}>increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
      
      
      <button onClick={() => dispatch(login())}>login</button>
      
    </div>
  );
}

export default App;
