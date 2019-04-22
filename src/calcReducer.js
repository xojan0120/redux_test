// reducerは第一引数のstateに対して、第二引数のactionのtypeに応じて
// 新しいstateを生成して返す
export default (currentState = {value: 0}, action) => {
  switch (action.type) {
    case 'ADD':
      return { value: currentState.value + action.params.amount }
    case 'MULTI':
      return { value: currentState.value * action.params.amount }
    default:
      return currentState;
  };
};
