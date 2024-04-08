import React, { Component } from 'react';
import css from '../styles/Open.module.css';

export class Open extends Component {
  render() {
    const { children, feedbackGiven } = this.props;

    return (
      <div>
        {feedbackGiven ? (
          children
        ) : (
          <p className={css.feedbackParag}>No feedback given</p>
        )}
      </div>
    );
  }
}
