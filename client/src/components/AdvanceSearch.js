import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Header from "./Header";
import Footer from "./Footer";

class AdvanceSearch extends Component {
  render() {
    return (
      <div>
        <Header />
        <div>Advance Search Section</div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdvanceSearch);
