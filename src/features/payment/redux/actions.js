import { PAYMENT_LIST } from "./constants";

export const paymentAction = () => {
  return {
    type: PAYMENT_LIST,
  };
};
export function reducer(state, action) {
  switch (action.type) {
    case PAYMENT_LIST:
      return {
        ...state,
        list: action.payload,
      };
    default:
      return state;
  }
}
