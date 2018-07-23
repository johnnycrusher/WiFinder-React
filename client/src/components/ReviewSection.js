import React, { Component } from "react";
import ReviewItem from "./ReviewItem";

export default class ReviewSection extends Component {
	renderReviewItem() {
		const reviewData = this.props.reviewData;
		const ReviewID = reviewData.map(ReviewEntry => {
			return ReviewEntry.reviewID;
		});
		const Username = reviewData.map(ReviewEntry => {
			return ReviewEntry.Username;
		});
		const ReviewDate = reviewData.map(ReviewEntry => {
			return ReviewEntry.ReviewDate;
		});
		const ReviewRating = reviewData.map(ReviewEntry => {
			return ReviewEntry.ReviewRating;
		});
		const ReviewDescription = reviewData.map(ReviewEntry => {
			return ReviewEntry.ReviewDescription;
		});

		return (
			<div>
				{ReviewID.map((ReviewEntryID, index) => {
					return (
						<ReviewItem
							key={ReviewEntryID}
							author={Username[index]}
							datePublished={ReviewDate[index]}
							rating={ReviewRating[index]}
							description={ReviewDescription[index]}
						/>
					);
				})}
			</div>
		);
	}

	render() {
		return (
			<div className="group-list">
				<h2>Reviews:</h2>
				{this.renderReviewItem()}
			</div>
		);
	}
}
