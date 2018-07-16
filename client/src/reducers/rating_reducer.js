import { RATING_CHOICE } from "../action/index";
import axios from "axios";

export default function(state = {}, action) {
  switch (action.type) {
    case RATING_CHOICE:
      return [action.payload.data, ...state];
    default:
      return state;
  }
}
