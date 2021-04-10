export default function (state = {}, action) {
  switch (action.type) {
    case "FRUITS_LIST":
      return { ...state, fruits: action.payload };
    default:
      return state;
  }
}
