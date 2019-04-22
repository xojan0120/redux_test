// reducerは第一引数のstateに対して、第二引数のactionのtypeに応じて新しいstateを生成して返す
const initialState = {
  value: 0,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD':
      return { value: state.value + action.params.amount }
    case 'MULTI':
      return { value: state.value * action.params.amount }
    default:
      return state;
  };
};
