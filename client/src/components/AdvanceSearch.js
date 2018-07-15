import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import "../styles/AdvanceSearch.css";

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
          <input className="form-control" type={field.type} {...field.input} />
          <button className="btn">
            <i className="fa fa-map-marker fa-3x" />
          </button>
        </span>
      </div>
    );
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
          </form>
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default reduxForm({
  form: "SearchForm"
})(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(AdvanceSearch)
);
