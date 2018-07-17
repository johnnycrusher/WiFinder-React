import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { bindActionCreators } from "redux";
import "../styles/AdvanceSearch.css";
import { ratingChoose } from "../action/index";
import _ from "lodash";

import Header from "./Header";
import Footer from "./Footer";

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
          <button className="btn">
            <i className="fa fa-map-marker fa-3x" />
          </button>
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

  componentDidMount() {
    this.props.change("Rating", this.countingNumOfStars());
  }

  componentDidUpdate() {
    this.props.change("Rating", this.countingNumOfStars());
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <Header />
        <div id="content" className="container center">
          Advance Search Section
          <form>
            <Field
              id="Search"
              name="Search"
              type="text"
              label="Advance Search"
              component={this.renderField}
            />
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
              <label>Rating:</label>
              With a minimum rating of
              <span onClick={this.props.ratingChoose}>
                <i
                  id="one-star"
                  className={
                    _.isEmpty(this.props.rating)
                      ? "fa fa-star-o"
                      : this.props.rating[0]["one-star"] === true
                        ? "fa fa-star"
                        : "fa fa-star-o"
                  }
                />
              </span>
              <span onClick={this.props.ratingChoose}>
                <i
                  id="two-star"
                  className={
                    _.isEmpty(this.props.rating)
                      ? "fa fa-star-o"
                      : this.props.rating[0]["two-star"] === true
                        ? "fa fa-star"
                        : "fa fa-star-o"
                  }
                />
              </span>
              <span onClick={this.props.ratingChoose}>
                <i
                  id="three-star"
                  className={
                    _.isEmpty(this.props.rating)
                      ? "fa fa-star-o"
                      : this.props.rating[0]["three-star"] === true
                        ? "fa fa-star"
                        : "fa fa-star-o"
                  }
                />
              </span>
              <span onClick={this.props.ratingChoose}>
                <i
                  id="four-star"
                  className={
                    _.isEmpty(this.props.rating)
                      ? "fa fa-star-o"
                      : this.props.rating[0]["four-star"] === true
                        ? "fa fa-star"
                        : "fa fa-star-o"
                  }
                />
              </span>
              <span onClick={this.props.ratingChoose}>
                <i
                  id="five-star"
                  className={
                    _.isEmpty(this.props.rating)
                      ? "fa fa-star-o"
                      : this.props.rating[0]["five-star"] === true
                        ? "fa fa-star"
                        : "fa fa-star-o"
                  }
                />
              </span>
              <div className="input-field col s2">
                <Field
                  id="rating"
                  name="Rating"
                  component="input"
                  type="text"
                />/5
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
  return { rating: state.rating };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ ratingChoose }, dispatch);
}

export default reduxForm({
  form: "SearchForm"
})(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(AdvanceSearch)
);