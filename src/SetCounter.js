import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { useCounter } from './use-counter';

export const SetCounter = () => {
  const { value: countFromStore, set } = useCounter();
  const [value, setValue] = useState(countFromStore);
  const dispatch = useDispatch();

  useEffect(() => {
    setValue(countFromStore);
  }, [countFromStore]);

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
