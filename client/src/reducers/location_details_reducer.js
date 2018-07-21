import { GET_LOCATION_DETAILS } from "../action/index";

export default function(state = {}, action) {
  switch (action.type) {
    case GET_LOCATION_DETAILS:
      return action.payload;
    default:
      return state;
  }
}
