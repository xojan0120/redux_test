// ActionCreator
export const addValueAction = (amount) => {
  // returnでは必ずactionオブジェクトを返す
  // actionオブジェクトはtypeプロパティ必須
  return({
    type: 'ADD',
    params: {
      amount: amount,
    }
  });
};

export const multiValueAction = (amount) => {
  // returnでは必ずactionオブジェクトを返す
  // typeプロパティ必須
  return({
    type: 'MULTI',
    params: {
      amount: amount,
    }
  });
};
