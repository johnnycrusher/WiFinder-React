import React, { Component } from "react";
import { getWiFiLocations } from "../action/index";
import { connect } from "react-redux";
import queryString from "query-string";
import Header from "./Header";
import Footer from "./Footer";
import { bindActionCreators } from "../../node_modules/redux";

class ResultsShow extends Component {
  componentDidMount() {
    const query = queryString.parse(this.props.location.search);
    this.props.getWiFiLocations(query);
  }
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

function mapStateToProps(state) {
  return {
    wifiLocation: state.wifiLocation
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getWiFiLocations }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ResultsShow);
