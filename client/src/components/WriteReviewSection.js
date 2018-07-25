import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import _ from "lodash";

import RatingClick from "./RatingClick";

class WriteReviewSection extends Component {
	countingNumOfStars() {
		var numOfStars = 0;
		var stars = [
			"one-star",
			"two-star",
			"three-star",
			"four-star",
			"five-star"
		];
		if (!_.isEmpty(this.props.rating)) {
			for (var i = 0; i < 5; i++) {
				if (this.props.rating[0][stars[i]]) {
					numOfStars++;
				}
			}
		}
		return numOfStars;
	}

	componentDidMount() {
		this.props.change("ReviewRating", this.countingNumOfStars());
	}

	componentDidUpdate() {
		this.props.change("ReviewRating", this.countingNumOfStars());
	}

	onSubmit(values) {}

	render() {
		const { handleSubmit } = this.props;
		return (
			<div>
				<h2>Write Your Review:</h2>
				<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
					<label>Rating:</label>
					<RatingClick />
					<span>
						<Field
							name="ReviewRating"
							type="text"
							component="input"
							readOnly
						/>/5
					</span>
					<div>
						<Field name="ReviewDescription" component="textarea" />
					</div>
					<button className="btn btn-primary">Submit</button>
				</form>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		rating: state.rating
	};
}

export default reduxForm({
	form: "ReviewForm"
})(connect(mapStateToProps)(WriteReviewSection));
