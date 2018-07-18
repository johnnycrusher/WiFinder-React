import axios from "axios";

export const RATING_CHOICE = "rating_choice";
export const GET_LOCATION = "get_location";

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
export function getLocation() {
  const geolocation = navigator.geolocation;
  const location = new Promise((resolve, reject) => {
    if (!geolocation) {
      reject(new Error("Not Supported"));
    }

    geolocation.getCurrentPosition(
      position => {
        resolve(position);
      },
      () => {
        reject(new Error("Permission denied"));
      }
    );
  });
  return {
    type: GET_LOCATION,
    payload: location
  };
}
