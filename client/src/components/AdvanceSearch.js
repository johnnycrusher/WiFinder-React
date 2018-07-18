import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { bindActionCreators } from "redux";
import "../styles/AdvanceSearch.css";
import { ratingChoose } from "../action/index";
import { getLocation } from "../action/index";
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

  getCoordinartes() {}

  componentDidMount() {
    this.props.change("Rating", this.countingNumOfStars());
  }

  componentDidUpdate() {
    this.props.change("Rating", this.countingNumOfStars());
    console.log(this.props.location);
    if (!_.isEmpty(this.props.location)) {
      this.props.change("latitude", this.props.location[0].latitude);
      this.props.change("longitude", this.props.location[0].longitude);
    }
  }

  onSubmit(values) {}

  render() {
    const { handleSubmit } = this.props;
    // const {
    //   coords: { latitude, longitude }
    // } = this.props.location;
    return (
      <div>
        <Header />
        <div id="content" className="container center">
          Advance Search Section
          <form>
            <Field
              id="Search"
              name="search"
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
                  name="latitude"
                  component="input"
                  type="hidden"
                  readOnly
                />
                <Field
                  name="longitude"
                  component="input"
                  type="hidden"
                  readOnly
                />
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
    location: state.location
    // search: selector(state, "search"),
    // ratingValue: selector(state, "Rating"),
    // latitude: selector(state, "latitude"),
    // longitude: selector(state, "longitude")
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
