import React, { Component } from 'react';
import css from '../styles/App.module.css';
import { Statistics } from './Statistics';
import { FeedbackOptions } from './FeedbackOptions';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = feedbackType => {
    this.setState(prevState => ({
      [feedbackType]: prevState[feedbackType] + 1,
    }));
  };

  countTotalFeedback = () => {
    const total = this.state.good + this.state.neutral + this.state.bad;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const percentage = (this.state.good * 100) / this.countTotalFeedback();
    return Math.round(percentage, 3);
  };

  render() {
    return (
      <div className={css.appContainer}>
        <div>
          <p className={css.paragraph}>Please leave feedback</p>
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.handleClick}
          />
        </div>
        <div>
          <p className={css.paragraph}>Statistics</p>
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        </div>
      </div>
    );
  }
}
