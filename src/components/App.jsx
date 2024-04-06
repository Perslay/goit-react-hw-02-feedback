import React, { Component } from 'react';
import css from '../styles/App.module.css';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleGood = () => {
    this.setState({ good: this.state.good + 1 });
  };

  handleNeutral = () => {
    this.setState({ neutral: this.state.neutral + 1 });
  };

  handleBad = () => {
    this.setState({ bad: this.state.bad + 1 });
  };

  countTotalFeedback = () => {
    const total = this.state.good + this.state.neutral + this.state.bad;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    let percentage;

    if (this.countTotalFeedback() === 0) {
      percentage = 0;
      return percentage;
    }

    percentage = (this.state.good * 100) / this.countTotalFeedback();
    return Math.round(percentage, 3);
  };

  render() {
    return (
      <div className={css.appContainer}>
        <div>
          <p className={css.paragraph}>Please leave feedback</p>
          <ul className={css.list}>
            <li className={css.listItem}>
              <button
                className={css.button}
                type="button"
                onClick={this.handleGood}
              >
                Good
              </button>
            </li>
            <li className={css.listItem}>
              <button
                className={css.button}
                type="button"
                onClick={this.handleNeutral}
              >
                Neutral
              </button>
            </li>
            <li className={css.listItem}>
              <button
                className={css.button}
                type="button"
                onClick={this.handleBad}
              >
                Bad
              </button>
            </li>
          </ul>
        </div>
        <div>
          <p className={css.paragraph}>Statistics</p>
          <ul className={css.list}>
            <li className={css.listItem}>Good: {this.state.good}</li>
            <li className={css.listItem}>Neutral: {this.state.neutral}</li>
            <li className={css.listItem}>Bad: {this.state.bad}</li>
            <li className={css.listItem}>Total: {this.countTotalFeedback()}</li>
            <li className={css.listItem}>
              Positive feedback: {this.countPositiveFeedbackPercentage()}%
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
