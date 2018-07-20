import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import RatingReducer from "./rating_reducer";
import LocationReducer from "./location_reducer";
import WiFiLocationReducer from "./get_location_reducer";

const rootReducer = combineReducers({
  form: formReducer,
  rating: RatingReducer,
  location: LocationReducer,
  wifiLocation: WiFiLocationReducer
});

export default rootReducer;
