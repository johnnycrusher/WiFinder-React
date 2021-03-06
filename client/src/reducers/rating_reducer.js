import { RATING_CHOICE } from "../action/index";

export default function(state = {}, action) {
  switch (action.type) {
    case RATING_CHOICE:
      return [action.payload];
    default:
      return state;
  }
}
