import { useSelector } from 'react-redux';

export const Counter = () => {
  const incident = 'Incident';
  // const count = 0;
  const value = useSelector((state) => state.value);

  return (
    <main className="Counter">
      <h1>Days Since Last {incident}</h1>
      <p className="count">{value}</p>
      <section className="controls">
        <button>Increment</button>
        <button>Reset</button>
        <button>Decrement</button>
      </section>
    </main>
  );
};

export default Counter;
