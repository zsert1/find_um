const INCREASE = 'counter/INCREASE' as const;
const DECREASE = 'counter/DECREASE' as const;
export const increase = () => ({type: INCREASE});

export const decrease = () => ({type: DECREASE});

type CounterAction = ReturnType<typeof increase> | ReturnType<typeof decrease>;

type CounterState = {count: number};

const initialState: CounterState = {count: 0};

function counter(state: CounterState = initialState, action: CounterAction) {
  switch (action.type) {
    case INCREASE:
      return {count: state.count + 1};
    case DECREASE:
      return {count: state.count - 1};
    default:
      return state;
  }
}

export default counter;
