import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import "../styles/AdvanceSearch.css";
import { ratingChoose } from "../action/index";

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

  render() {
    const { handleSubmit } = this.props;
    console.log(this.props);
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
                <i id="one-star" className="fa fa-star-o" />
              </span>
              <span onClick={this.props.ratingChoose}>
                <i id="two-star" className="fa fa-star-o" />
              </span>
              <span onClick={this.props.ratingChoose}>
                <i id="three-star" className="fa fa-star-o" />
              </span>
              <span onClick={this.props.ratingChoose}>
                <i id="four-star" className="fa fa-star-o" />
              </span>
              <span onClick={this.props.ratingChoose}>
                <i id="five-star" className="fa fa-star-o" />
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

const mapStateToProps = state => ({});

export default reduxForm({
  form: "SearchForm"
})(
  connect(
    null,
    { ratingChoose }
  )(AdvanceSearch)
);
