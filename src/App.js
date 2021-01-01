import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './redux/action';

const App = () => {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <p>{count}</p>
      <button onClick={e => dispatch(increment)}>Increment</button>
      <button onClick={e => dispatch(decrement)}>Decrement</button>
    </div>
  );
}

export default App;
