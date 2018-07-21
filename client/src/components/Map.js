import React, { Component } from "react";
export default class Map extends Component {
  renderMap() {
    var LocationCordinates = {
      lat: this.props.Latitude,
      lng: this.props.Longitude
    };
    var options = {
      zoom: 16,
      center: LocationCordinates
    };
    const google = window.google;
    var map = new google.maps.Map(this.refs.maps, options);
    var marker = new google.maps.Marker({
      position: LocationCordinates,
      map: map
    });
    var infowindow = new google.maps.InfoWindow({
      content: `<h2>${this.props.data[0].LocationName}</h2>
        <p>${this.props.data[0].LocationAddress},${
        this.props.data[0].LocationSuburb
      }</p>
        <button onclick=window.open('https://www.google.com/maps/search/?api=1&query=${
          this.props.Latitude
        },${this.props.Longitude}');>Directions</button>`
    });
    marker.addListener("click", function() {
      infowindow.open(map, marker);
    });
  }

  componentDidMount() {
    this.renderMap();
  }
  render() {
    const mapStyling = {
      width: this.props.width,
      height: this.props.height,
      margin: "0 auto"
    };
    return <div style={mapStyling} ref="maps" />;
  }
}
