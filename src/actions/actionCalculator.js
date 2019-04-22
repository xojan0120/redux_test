// ActionCreator
export const addValue= (amount) => {
  // returnでは必ずactionオブジェクトを返す
  // actionオブジェクトはtypeプロパティ必須
  return({
    type: 'ADD',
    params: {
      amount: amount,
    }
  });
};

export const multiValue = (amount) => {
  // returnでは必ずactionオブジェクトを返す
  // typeプロパティ必須
  return({
    type: 'MULTI',
    params: {
      amount: amount,
    }
  });
};
