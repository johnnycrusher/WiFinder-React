import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import "../styles/AdvanceSearch.css";

import Header from "./Header";
import Footer from "./Footer";

class AdvanceSearch extends Component {
  renderField(field) {
    return (
      <div>
        <label id="Advance-Search" className="browser-default">
          {field.label}
        </label>
        <span>
          <input className="browser-default" type={field.type} />
          <button className="btn">
            <i className="medium material-icons">gps_fixed</i>
          </button>
        </span>
      </div>
    );
  }
  renderDropdown(field) {}

  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <Header />
        <div className="container center">
          Advance Search Section
          <form>
            <Field
              name="Search"
              type="text"
              label="Advance Search"
              component={this.renderField}
            />
            <h4 className="left-align">Narrow your search results by...</h4>
            {/* <Field name="LocationType" label="Location Type:" /> */}
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
