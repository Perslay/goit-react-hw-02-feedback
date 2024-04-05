import React, { Component } from 'react';
import css from '../styles/App.module.css';

export class App extends Component {
  constructor() {
    super();

    this.state = {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  }

  handleGood = () => {
    this.setState({ good: this.state.good + 1 });
  };

  handleNeutral = () => {
    this.setState({ neutral: this.state.neutral + 1 });
  };

  handleBad = () => {
    this.setState({ bad: this.state.bad + 1 });
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
          </ul>
        </div>
      </div>
    );
  }
}
