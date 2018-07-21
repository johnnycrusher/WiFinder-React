import React, { Component } from "react";
import { Link } from "react-router-dom";
import _ from "lodash";
import RatingDisplay from "./RatingDisplay";

export default class LocationTile extends Component {
  render() {
    return (
      <Link to={`/location/${this.props.LocationId}`}>
        <li className="list-group-item">
          <h2 className="WifiName">{this.props.LocationName}</h2>
          <span className="rating">
            <RatingDisplay ratingData={this.props.LocationRating} />
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
