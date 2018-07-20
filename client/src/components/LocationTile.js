import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class LocationTile extends Component {
  render() {
    return (
      <Link to={`/location/${this.props.LocationId}`}>
        <li className="list-group-item">
          <h2 className="WifiName">{this.props.LocationName}</h2>
          <span className="rating">
            <i className="fa fa-star-o" />
            <i className="fa fa-star-o" />
            <i className="fa fa-star-o" />
            <i className="fa fa-star-o" />
            <i className="fa fa-star-o" />
            {this.props.LocationRating}/5 stars
          </span>
          <p className="address">{this.props.LocationAddress}</p>
          <p className="location">Location Type: {this.props.LocationType}</p>
        </li>
      </Link>
    );
  }
}
