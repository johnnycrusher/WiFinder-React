import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "./Header";
import Footer from "./Footer";
import { getLocationInformation, getReviewDetails } from "../action/index";
import { bindActionCreators } from "redux";

class IndivdualResults extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.getLocationInformation(id);
    this.props.getReviewDetails(id);
  }

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

function mapStateToProps(state) {
  return {
    LocationDetails: state.LocationDetails,
    ReviewDetails: state.ReviewDetails
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { getLocationInformation, getReviewDetails },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IndivdualResults);
