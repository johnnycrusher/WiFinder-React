import React, { Component } from "react";

export default class RatingDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: {
        "zero-star": false,
        "half-star": false,
        "one-star": false,
        "one-half-star": false,
        "two-star": false,
        "two-half-star": false,
        "three-star": false,
        "three-half-star": false,
        "four-star": false,
        "four-half-star": false,
        "five-star": false
      }
    };
  }

  determineRatingState() {
    const rating = this.props.ratingData;
    var ratingString = [
      "zero-star",
      "half-star",
      "one-star",
      "one-half-star",
      "two-star",
      "two-half-star",
      "three-star",
      "three-half-star",
      "four-star",
      "four-half-star",
      "five-star"
    ];

    const maxRating = 5;

    var ratingStars = {
      "zero-star": false,
      "half-star": false,
      "one-star": false,
      "one-half-star": false,
      "two-star": false,
      "two-half-star": false,
      "three-star": false,
      "three-half-star": false,
      "four-star": false,
      "four-half-star": false,
      "five-star": false
    };
    for (var counter = 0; counter < maxRating; counter += 0.5) {
      if (rating >= counter) {
        if (counter === 0) {
          ratingStars[ratingString[counter]] = true;
        } else if (counter > 0) {
          ratingStars[ratingString[counter * 2]] = true;
        }
      } else {
        break;
      }
    }
    return ratingStars;
  }

  componentDidMount() {
    var ratingState = this.determineRatingState();
    this.setState({ rating: ratingState });
  }

  render() {
    return (
      <div>
        <i
          className={
            this.state.rating["half-star"]
              ? this.state.rating["one-star"]
                ? "fa fa-star"
                : "fa fa-star-half-o"
              : "fa fa-star-o"
          }
        />
        <i
          className={
            this.state.rating["one-half-star"]
              ? this.state.rating["two-star"]
                ? "fa fa-star"
                : "fa fa-star-half-o"
              : "fa fa-star-o"
          }
        />
        <i
          className={
            this.state.rating["two-half-star"]
              ? this.state.rating["three-star"]
                ? "fa fa-star"
                : "fa fa-star-half-o"
              : "fa fa-star-o"
          }
        />
        <i
          className={
            this.state.rating["three-half-star"]
              ? this.state.rating["four-star"]
                ? "fa fa-star"
                : "fa fa-star-half-o"
              : "fa fa-star-o"
          }
        />
        <i
          className={
            this.state.rating["four-half-star"]
              ? this.state.rating["five-star"]
                ? "fa fa-star"
                : "fa fa-star-half-o"
              : "fa fa-star-o"
          }
        />
      </div>
    );
  }
}
