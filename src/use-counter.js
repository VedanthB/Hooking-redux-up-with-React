import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { decrement, increment, set } from './actions';
import { useActions } from './set-actions';

export const useCounter = () => {
  const value = useSelector((state) => state.value);
  const actions = useActions({ increment, decrement, set });
  return useMemo(() => {
    return { value, ...actions };
  }, [value, actions]);
};
