import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { bindActionCreators } from "redux";
import "../styles/AdvanceSearch.css";
import { ratingChoose, getLocation } from "../action/index";
import _ from "lodash";

import Header from "./Header";
import Footer from "./Footer";
import formValueSelector from "../../node_modules/redux-form/lib/formValueSelector";

class AdvanceSearch extends Component {
  renderField(field) {
    return (
      <div className="form-group">
        <label htmlFor={field.name} id="Advance-Search">
          {field.label}
        </label>
        <span>
          <input
            id={field.id}
            className="form-control"
            type={field.type}
            {...field.input}
          />
        </span>
      </div>
    );
  }

  countingNumOfStars() {
    var numOfStars = 0;
    var stars = [
      "one-star",
      "two-star",
      "three-star",
      "four-star",
      "five-star"
    ];
    if (!_.isEmpty(this.props.rating)) {
      for (var i = 0; i < 5; i++) {
        if (this.props.rating[0][stars[i]]) {
          numOfStars++;
        }
      }
    }
    return numOfStars;
  }

  findAddress(Coords) {
    const google = window.google;
    var geocoder = new google.maps.Geocoder();
    var location = "";
    var cordinates = { lat: Coords.latitude, lng: Coords.longitude };
    return new Promise(function(resolve, reject) {
      geocoder.geocode({ location: cordinates }, function(results, status) {
        if (status === "OK") {
          location =
            results[0].address_components[0].long_name +
            " " +
            results[0].address_components[1].long_name +
            ", " +
            results[0].address_components[2].long_name;
          resolve(location);
        } else {
          reject(
            new Error(
              `Couldn't find location for Lat:${cordinates.latitude}, Lng:${
                cordinates.longitude
              }`
            )
          );
        }
      });
    });
  }

  findLatLng(address) {
    const google = window.google;
    var LatLngGeocoder = new google.maps.Geocoder();
    return new Promise(function(resolve, reject) {
      LatLngGeocoder.geocode(
        {
          address: address,
          componentRestrictions: {
            country: "AU"
          }
        },
        function(results, status) {
          if (status === "OK") {
            var lng = results[0].geometry.location.lng();
            var lat = results[0].geometry.location.lat();
            var latlngJSON = { latitude: lat, longitude: lng };
            resolve(latlngJSON);
          } else {
            reject(`Geocode was not for the following reasons: ${status}`);
          }
        }
      );
    });
  }

  componentDidMount() {
    this.props.change("Rating", this.countingNumOfStars());
  }

  componentDidUpdate() {
    this.props.change("Rating", this.countingNumOfStars());
    if (!_.isEmpty(this.props.location)) {
      this.props.change("Latitude", this.props.location[0].latitude);
      this.props.change("Longitude", this.props.location[0].longitude);
      var location = this.findAddress(this.props.location[0]);
      this.props.change("Search", location);
    }
  }

  onSubmit(values) {
    this.findLatLng(this.props.search).then(geoLocation => {
      this.props.change("Latitude", geoLocation["latitude"]);
      this.props.change("Longitude", geoLocation["longitude"]);
      values.Latitude = this.props.Latitude;
      values.Longitude = this.props.Longitude;
      values.Order = "distance";
      var queryString = `?Latitude=${values.Latitude}&Longitude=${
        values.Longitude
      }&LocationType=park&Rating=${values.Rating}&Order=${values.Order}`;
      this.props.history.push(`/results${queryString}`);
    });
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <Header />
        <div id="content" className="container center">
          Advance Search Section
          <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
            <Field
              id="Search"
              name="Search"
              type="text"
              label="Advance Search"
              component={this.renderField}
            />
            <button
              className="btn"
              type="button"
              onClick={this.props.getLocation}
            >
              <i className="fa fa-map-marker fa-3x" />
            </button>
            <h4 className="left-align">Narrow your search results by...</h4>
            <div className="input-field col s2">
              <label>Location Type: </label>
              <Field
                id="LocationTypeSelect"
                name="LocationType"
                component="select"
              >
                <option value="All">All</option>
                <option value="Library">Library</option>
                <option value="Park">Park</option>
              </Field>
            </div>
            <div>
              With a minimum rating of:
              <div>
                <span onClick={this.props.ratingChoose}>
                  <i
                    id="one-star"
                    className={
                      _.isEmpty(this.props.rating)
                        ? "fa fa-star-o star"
                        : this.props.rating[0]["one-star"] === true
                          ? "fa fa-star star"
                          : "fa fa-star-o star"
                    }
                  />
                </span>
                <span onClick={this.props.ratingChoose}>
                  <i
                    id="two-star"
                    className={
                      _.isEmpty(this.props.rating)
                        ? "fa fa-star-o star"
                        : this.props.rating[0]["two-star"] === true
                          ? "fa fa-star star"
                          : "fa fa-star-o star"
                    }
                  />
                </span>
                <span onClick={this.props.ratingChoose}>
                  <i
                    id="three-star"
                    className={
                      _.isEmpty(this.props.rating)
                        ? "fa fa-star-o star"
                        : this.props.rating[0]["three-star"] === true
                          ? "fa fa-star star"
                          : "fa fa-star-o star"
                    }
                  />
                </span>
                <span onClick={this.props.ratingChoose}>
                  <i
                    id="four-star"
                    className={
                      _.isEmpty(this.props.rating)
                        ? "fa fa-star-o star"
                        : this.props.rating[0]["four-star"] === true
                          ? "fa fa-star star"
                          : "fa fa-star-o star"
                    }
                  />
                </span>
                <span onClick={this.props.ratingChoose}>
                  <i
                    id="five-star"
                    className={
                      _.isEmpty(this.props.rating)
                        ? "fa fa-star-o star"
                        : this.props.rating[0]["five-star"] === true
                          ? "fa fa-star star"
                          : "fa fa-star-o star"
                    }
                  />
                </span>
                <Field
                  id="rating"
                  name="Rating"
                  component="input"
                  type="text"
                  readOnly
                />/5
                <Field
                  name="Latitude"
                  component="input"
                  type="hidden"
                  readOnly
                />
                <Field
                  name="Longitude"
                  component="input"
                  type="hidden"
                  readOnly
                />
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
        <Footer />
      </div>
    );
  }
}

function mapStateToProps(state) {
  const selector = formValueSelector("SearchForm");
  return {
    rating: state.rating,
    location: state.location,
    search: selector(state, "Search"),
    ratingValue: selector(state, "Rating"),
    Latitude: selector(state, "Latitude"),
    Longitude: selector(state, "Longitude")
  };
}

function mapDispatchToProps(dispatch) {
  // ratingChooseAction: bindActionCreators({ ratingChoose }, dispatch)
  return bindActionCreators({ getLocation, ratingChoose }, dispatch);
}

export default reduxForm({
  form: "SearchForm"
})(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(AdvanceSearch)
);
