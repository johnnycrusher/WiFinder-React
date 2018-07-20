import React, { Component } from "react";
import LocationTile from "./LocationTile";
import _ from "lodash";

export default class LocationList extends Component {
  renderLocationTile() {
    const LocationData = this.props.data;

    const LocationID = LocationData.map(LocationEntry => {
      return LocationEntry.LocationID;
    });
    const LocationName = LocationData.map(LocationEntry => {
      return LocationEntry.LocationName;
    });
    const LocationAddress = LocationData.map(LocationEntry => {
      return `${LocationEntry.LocationAddress},${LocationEntry.LocationSuburb}`;
    });
    const LocationType = LocationData.map(LocationEntry => {
      return LocationEntry.LocationType;
    });
    const LocationRating = LocationData.map(LocationEntry => {
      return LocationEntry.AvgRating;
    });
    const LocationDistance = LocationData.map(LocationEntry => {
      return LocationEntry.distance;
    });
    return (
      <div>
        {LocationID.map((LocationEntryID, index) => {
          return (
            <LocationTile
              key={LocationEntryID}
              LocationId={LocationEntryID}
              LocationName={LocationName[index]}
              LocationAddress={LocationAddress[index]}
              LocationType={LocationType[index]}
              LocationRating={LocationRating[index]}
              LocationDistance={LocationDistance[index]}
            />
          );
        })}
      </div>
    );
    // console.log(LocationID);
  }
  render() {
    if (!_.isEmpty(this.props.data)) {
      return (
        <div className="container">
          <ul className="list-group">{this.renderLocationTile()}</ul>;
        </div>
      );
    } else {
      return <div>Loading</div>;
    }
  }
}
