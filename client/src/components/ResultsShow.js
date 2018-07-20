import React, { Component } from "react";
import { getWiFiLocations } from "../action";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import queryString from "query-string";
import Header from "./Header";
import Footer from "./Footer";
import LocationList from "./LocationList";

class ResultsShow extends Component {
  componentDidMount() {
    const query = queryString.parse(this.props.location.search);
    this.props.getWiFiLocations(query);
    console.log(this.props.wifiLocation);
  }
  render() {
    return (
      <div>
        <Header />
        <div>Results Show Section</div>
        <LocationList data={this.props.wifiLocation[0]} />
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
