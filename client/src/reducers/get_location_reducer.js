import { GET_WIFI_LOCATIONS } from "../action";

export default function(state = {}, action) {
  switch (action.type) {
    case GET_WIFI_LOCATIONS:
      return [action.payload.data];
    default:
      return state;
  }
}
