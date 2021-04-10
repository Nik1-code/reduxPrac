export const fruits_list = () => {
  return {
    type: "FRUITS_LIST",
    payload: [
      { id: 1, name: "Orange" },
      { id: 2, name: "Apple" },
      { id: 3, name: "Pineapple" },
    ],
  };
};

export const juice_list = () => {
  return {
    type: "JUICE_LIST",
    payload: [
      { id: 1, name: "Orange juice" },
      { id: 2, name: "Apple juice" },
      { id: 3, name: "Pineapple juice" },
    ],
  };
};
