import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "./Header";
import Footer from "./Footer";

class LoginForm extends Component {
  render() {
    return (
      <div>
        <Header />
        <div>Login Form Section</div>
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
