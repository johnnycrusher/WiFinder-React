import axios from "axios";

export const RATING_CHOICE = "rating_choice";

export function ratingChoose(e) {
  var id = e.target.id;
  console.log(id);
  var stars = ["one-star", "two-star", "three-star", "four-star", "five-star"];
  var selectedRating = {
    "one-star": false,
    "two-star": false,
    "three-star": false,
    "four-star": false,
    "five-star": false
  };
  for (let i = 0; i < stars.length; i++) {
    if (id === stars[i]) {
      for (let j = 0; j <= i; j++) {
        selectedRating[stars[j]] = true;
      }
    }
  }

  return {
    type: RATING_CHOICE,
    payload: selectedRating
  };
}
