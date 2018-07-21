import { GET_REVIEW_DETAILS } from "../action/index";

export default function(state = {}, action) {
  switch (action.type) {
    case GET_REVIEW_DETAILS:
      return action.payload;
    default:
      return state;
  }
}
