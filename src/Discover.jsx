import React from "react";
import "./Discover.css";

const Discover = () => {
  return (
    <div className="discover-container">
      <div className="form-section">
        <h2>Driver's Details</h2>
        <form>
          <div className="input-group">
            <div className="input-field">
              <label>First Name</label>
              <input type="text" placeholder="Enter first name" />
            </div>
            <div className="input-field">
              <label>Last Name</label>
              <input type="text" placeholder="Enter last name" />
            </div>
          </div>

          <div className="input-group">
            <div className="input-field">
              <label>Email Address</label>
              <input type="email" placeholder="Enter email" />
            </div>
            <div className="input-field">
              <label>Phone Number</label>
              <input type="tel" placeholder="Enter phone number" />
            </div>
          </div>

          <div className="checkbox">
            <input type="checkbox" id="subscribe" />
            <label htmlFor="subscribe">Learn about Energy Products</label>
          </div>

          <p className="terms">
            By selecting “Submit” I agree to the <a href="#">terms and conditions</a> and allow contact.
          </p>

          <button className="submit-btn">Submit</button>
        </form>
      </div>

      
    </div>
  );
};

export default Discover;
