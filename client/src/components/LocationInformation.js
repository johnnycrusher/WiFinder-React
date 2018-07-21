import React, { Component } from "react";
import RatingDisplay from "./RatingDisplay";

export default class LocationInformation extends Component {
	render() {
		return (
			<div>
				<span itemProp="name">
					<h2>{this.props.data[0].LocationName}</h2>
				</span>
				<RatingDisplay ratingData={this.props.data[0].AvgRating} />
				<div
					itemProp="aggregateRating"
					itemScope
					itemType="http://schema.org/AggregateRating"
				>
					<span itemProp="ratingValue">
						{this.props.data[0].AvgRating}
					</span>
					/5 based on{" "}
					<span itemProp="reviewCount">
						{this.props.data[0].NumberOfRatings}
					</span>{" "}
					customer reviews
				</div>

				<div
					itemProp="address"
					itemScope
					itemType="http://schema.org/PostalAddress"
				>
					<meta
						itemProp="name"
						content={this.props.data[0].LocationName}
					/>
					<span itemProp="streetAddress">
						{this.props.data[0].LocationAddress}
					</span>,
					<span itemProp="addressRegion">
						{this.props.data[0].LocationSuburb},QLD
					</span>
				</div>
			</div>
		);
	}
}
