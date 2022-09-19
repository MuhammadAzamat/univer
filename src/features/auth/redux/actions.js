import { LOGIN } from "./constants";

export const loginActions = () => {
  return {
    type: LOGIN,
  };
};
export function reducer(state, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
      };
    default:
      return state;
  }
}
