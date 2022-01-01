import { DECREMENT, INCREMENT, SET } from './actions';

export const initialState = { value: 0 };

export const reducer = (state = initialState, action) => {
  if (action.type === INCREMENT) {
    return { value: state.value + 1 };
  }

  if (action.type === DECREMENT) {
    return { value: state.value - 1 };
  }

  if (action.type === SET) {
    return { value: parseInt(action.payload, 10) };
  }
  return state;
};
