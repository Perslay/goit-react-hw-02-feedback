import React, { Component } from 'react';
import css from '../styles/Notification.module.css';

export class Notification extends Component {
  render() {
    const { children, feedbackGiven, message } = this.props;

    return (
      <div>
        {feedbackGiven ? (
          children
        ) : (
          <p className={css.feedbackParag}>{message}</p>
        )}
      </div>
    );
  }
}
