import debtReducer from "./debt";
import checkingAmtReducer from "./checkingAmt";
import savingsAmtReducer from "./savingsAmt";
import lostReducer from "./lost";
import wonReducer from "./won";

import { combineReducers } from "redux";

const allReducers = combineReducers({
  debt: debtReducer,
  checkingAmt: checkingAmtReducer,
  savingsAmt: savingsAmtReducer,
  lost: lostReducer,
  won: wonReducer,
});

export default allReducers;