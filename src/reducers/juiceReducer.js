export default function (state = {}, action) {
  switch (action.type) {
    case "JUICE_LIST":
      return { ...state, juice: action.payload };
    default:
      return state;
  }
}
