import { createStore } from 'redux';
import { ActionType } from './action';

const initialState = {
  count: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.increment:
      return { ...state, count: state.count + 1 };
    case ActionType.decrement:
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
