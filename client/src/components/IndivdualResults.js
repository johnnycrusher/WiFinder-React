import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "./Header";
import Footer from "./Footer";
import { getLocationInformation, getReviewDetails } from "../action";
import { bindActionCreators } from "redux";
import LocationInformation from "./LocationInformation";
import ReviewSection from "./ReviewSection";
import Map from "./Map";
import _ from "lodash";
import WriteReviewSection from "./WriteReviewSection";

class IndivdualResults extends Component {
	componentDidMount() {
		const id = this.props.match.params.id;
		this.props.getLocationInformation(id);
		this.props.getReviewDetails(id);
	}

	render() {
		if (
			!_.isEmpty(this.props.LocationDetails) &&
			!_.isEmpty(this.props.ReviewDetails)
		) {
			return (
				<div>
					<Header />
					<div
						className="container"
						itemScope
						itemType="http://schema.org/Place"
					>
						Indivdual Results Section
						<Map
							Latitude={this.props.LocationDetails[0].Latitude}
							Longitude={this.props.LocationDetails[0].Longitude}
							data={this.props.LocationDetails}
							width="720px"
							height="360px"
						/>
						<LocationInformation
							data={this.props.LocationDetails}
						/>
						<ReviewSection reviewData={this.props.ReviewDetails} />
						<WriteReviewSection />
					</div>
					<Footer />
				</div>
			);
		} else {
			return (
				<div>
					<Header />
					<div
						className="container"
						itemScope
						itemType="http://schema.org/Place"
					>
						Indivdual Results Section
						<p>Loading...</p>
					</div>
					<Footer />
				</div>
			);
		}
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
