import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "./Header";
import Footer from "./Footer";

class IndivdualResults extends Component {
  render() {
    return (
      <div>
        <Header />
        <div>Indivdual Results Section</div>
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
)(IndivdualResults);
