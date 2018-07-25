import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import Header from "./Header";
import Footer from "./Footer";

class LoginForm extends Component {
	renderInputField(labelTitle, type, name) {
		return (
			<div>
				<label>{labelTitle}</label>
				<Field
					name={name}
					type={type}
					className="form-control"
					Component={input}
				/>
				<div className="text-helo" />
			</div>
		);
	}
	render() {
		return (
			<div>
				<Header />
				<div>
					<h2>Login:</h2>
					<div className="input-group" />
				</div>
				<Footer />
			</div>
		);
	}
}

const mapDispatchToProps = {};

export default connect(
	null,
	mapDispatchToProps
)(LoginForm);
