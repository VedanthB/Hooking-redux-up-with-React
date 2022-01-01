import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { set } from './actions';

export const SetCounter = () => {
  const [value, setValue] = useState(0);
  const dispatch = useDispatch();

  return (
    <section className="controls">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          dispatch(set(value));
        }}
      >
        <label htmlFor="set-to">Set Count</label>
        <input
          id="set-to"
          type="number"
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        <input type="submit" />
      </form>
    </section>
  );
};
