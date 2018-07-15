import React, { Component } from "react";
import "../styles/footer.css";
export default class Footer extends Component {
  render() {
    return (
      <footer className="page-footer font-small teal pt-4" id="footer">
        <div className="container text-center text-md-left text-white">
          <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
              <h5 className="text-uppercase font-weight-bold">Our Mission</h5>
              <p>
                WiFinder mission is to connect the citizens of Brisbane with
                location data on where the closest Free Wifi-Location. To ensure
                they stay connected to the internet
              </p>
            </div>
            <hr className="clearfix w-100 d-md-none pb-3" />
            <div className="col-md-6 mb-md-0 mb-3 text-white">
              <h5 className="text-uppercase font-weight-bold">
                Connect with us:
              </h5>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio
                deserunt fuga perferendis modi earum commodi aperiam temporibus
                quod nulla nesciunt aliquid debitis ullam omnis quos ipsam,
                aspernatur id excepturi hic.
              </p>
            </div>
          </div>
        </div>
        <div className="footer-copyright text-center py-3 text-white">
          © 2018 Copyright: WiFinder Brisbane
        </div>
      </footer>
    );
  }
}
