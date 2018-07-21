import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import RatingReducer from "./rating_reducer";
import LocationReducer from "./location_reducer";
import WiFiLocationReducer from "./get_location_reducer";
import LocationDetailReducer from "./location_details_reducer";
import ReviewDetailReducer from "./review_details_reducer";

const rootReducer = combineReducers({
  form: formReducer,
  rating: RatingReducer,
  location: LocationReducer,
  wifiLocation: WiFiLocationReducer,
  LocationDetails: LocationDetailReducer,
  ReviewDetails: ReviewDetailReducer
});

export default rootReducer;
