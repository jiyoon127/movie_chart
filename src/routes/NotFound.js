import React, { Component } from 'react';
import './About.css';
import { Link } from 'react-router-dom';

class NotFound extends Component {
  state = {
    error: "Can't find this page.",
  };
  render() {
    const { error } = this.state;
    return (
      <div className="about__container">
        <span>
          <h3>{error}</h3>
        </span>
        <Link to="/">Go Back to Home</Link>
      </div>
    );
  }
}

export default NotFound;
