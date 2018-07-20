import {
  GET_LOCATION,
  GET_WIFI_LOCATIONS,
  RATING_CHOICE
} from "../action/index";

export default function(state = {}, action) {
  switch (action.type) {
    case GET_LOCATION:
      return [action.payload.coords];
    case GET_WIFI_LOCATIONS:
      return [action.payload];
    case RATING_CHOICE:
      return [action.payload];
    default:
      return state;
  }
}
