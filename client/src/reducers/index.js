import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import RatingReducer from "./rating_reducer";

const rootReducer = combineReducers({
  form: formReducer,
  rating: RatingReducer
});

export default rootReducer;
