import React, { Component } from "react";
import { Link } from "react-router-dom";
import _ from "lodash";

export default class LocationTile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ratingValue: {
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
    const rating = this.props.LocationRating;
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
    this.setState({ ratingValue: ratingState });
  }

  render() {
    return (
      <Link to={`/location/${this.props.LocationId}`}>
        <li className="list-group-item">
          <h2 className="WifiName">{this.props.LocationName}</h2>
          <span className="rating">
            <i
              className={
                this.state.ratingValue["half-star"]
                  ? this.state.ratingValue["one-star"]
                    ? "fa fa-star"
                    : "fa fa-star-half-o"
                  : "fa fa-star-o"
              }
            />
            <i
              className={
                this.state.ratingValue["one-half-star"]
                  ? this.state.ratingValue["two-star"]
                    ? "fa fa-star"
                    : "fa fa-star-half-o"
                  : "fa fa-star-o"
              }
            />
            <i
              className={
                this.state.ratingValue["two-half-star"]
                  ? this.state.ratingValue["three-star"]
                    ? "fa fa-star"
                    : "fa fa-star-half-o"
                  : "fa fa-star-o"
              }
            />
            <i
              className={
                this.state.ratingValue["three-half-star"]
                  ? this.state.ratingValue["four-star"]
                    ? "fa fa-star"
                    : "fa fa-star-half-o"
                  : "fa fa-star-o"
              }
            />
            <i
              className={
                this.state.ratingValue["four-half-star"]
                  ? this.state.ratingValue["five-star"]
                    ? "fa fa-star"
                    : "fa fa-star-half-o"
                  : "fa fa-star-o"
              }
            />
            {this.props.LocationRating}/5 stars
          </span>
          <p className="address">{this.props.LocationAddress}</p>
          <p className="location">Location Type: {this.props.LocationType}</p>
          <p className="distance">
            Distance from you: {_.round(this.props.LocationDistance, 2)}km
          </p>
        </li>
      </Link>
    );
  }
}
