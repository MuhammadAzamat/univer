import { paymentData } from "../mockData/list";

const initialState = {
  list: paymentData,
  currentItem: {},
  loading: {
    list: false,
    save: false,
  },
};

export default initialState;
