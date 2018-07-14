import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "./Header";
import Footer from "./Footer";

class ResultsShow extends Component {
  render() {
    return (
      <div>
        <Header />
        <div>Results Show Section</div>
        <Footer />
      </div>
    );
  }
}

const mapDispatchToProps = {};

export default connect(
  null,
  mapDispatchToProps
)(ResultsShow);
