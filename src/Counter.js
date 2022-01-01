import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, set } from './actions';
import { SetCounter } from './SetCounter';

const Counter = () => {
  const incident = 'Incident';
  // const count = 0;
  const value = useSelector((state) => state.value);
  const dispatch = useDispatch();

  return (
    <main className="Counter">
      <h1>Days Since Last {incident}</h1>
      <p className="count">{value}</p>
      <section className="controls">
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(set(0))}>Reset</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </section>
      <SetCounter />
    </main>
  );
};

export default Counter;
