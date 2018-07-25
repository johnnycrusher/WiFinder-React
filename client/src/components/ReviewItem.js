import React, { Component } from "react";
import RatingDisplay from "./RatingDisplay";

export default class ReviewItem extends Component {
	render() {
		return (
			<div
				itemProp="review"
				itemScope
				itemType="http://schema.org/Review"
				className="list-group-item"
			>
				<h3 itemProp="author">{this.props.author}</h3>
				<h4 itemProp="datePublished">
					Date Publish: {this.props.datePublished}
				</h4>
				<div
					itemProp="reviewRating"
					itemScope
					itemType="http://schema.org/Rating"
				>
					<RatingDisplay ratingData={this.props.rating} />
					<meta itemProp="worstRating" content="1" />
					<span itemProp="ratingValue">{this.props.rating}</span> /
					<span itemProp="bestRating">5</span> stars
				</div>
				<p itemProp="description">{this.props.description}</p>
			</div>
		);
	}
}
