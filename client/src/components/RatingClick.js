import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { ratingChoose } from "../action";
import _ from "lodash";

export class RatingClick extends Component {
	render() {
		return (
			<span>
				<span onClick={this.props.ratingChoose}>
					<i
						id="one-star"
						className={
							_.isEmpty(this.props.rating)
								? "fa fa-star-o star"
								: this.props.rating[0]["one-star"] === true
									? "fa fa-star star"
									: "fa fa-star-o star"
						}
					/>
				</span>
				<span onClick={this.props.ratingChoose}>
					<i
						id="two-star"
						className={
							_.isEmpty(this.props.rating)
								? "fa fa-star-o star"
								: this.props.rating[0]["two-star"] === true
									? "fa fa-star star"
									: "fa fa-star-o star"
						}
					/>
				</span>
				<span onClick={this.props.ratingChoose}>
					<i
						id="three-star"
						className={
							_.isEmpty(this.props.rating)
								? "fa fa-star-o star"
								: this.props.rating[0]["three-star"] === true
									? "fa fa-star star"
									: "fa fa-star-o star"
						}
					/>
				</span>
				<span onClick={this.props.ratingChoose}>
					<i
						id="four-star"
						className={
							_.isEmpty(this.props.rating)
								? "fa fa-star-o star"
								: this.props.rating[0]["four-star"] === true
									? "fa fa-star star"
									: "fa fa-star-o star"
						}
					/>
				</span>
				<span onClick={this.props.ratingChoose}>
					<i
						id="five-star"
						className={
							_.isEmpty(this.props.rating)
								? "fa fa-star-o star"
								: this.props.rating[0]["five-star"] === true
									? "fa fa-star star"
									: "fa fa-star-o star"
						}
					/>
				</span>
			</span>
		);
	}
}

function mapStateToProps(state) {
	return {
		rating: state.rating
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ ratingChoose }, dispatch);
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(RatingClick);
