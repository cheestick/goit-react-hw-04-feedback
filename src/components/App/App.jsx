import React, { Component } from 'react';
import Section from 'components/Section';
import FeedbackOptions from 'components/FeedbackOptions';
import Statistics from 'components/Statistics';
import Notification from 'components/Notification';
import s from './App.module.css';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  updateStats = type => {
    this.setState(prevState => ({
      [type]: prevState[type] + 1,
    }));
  };

  countTotalFeedback = () => {
    const total = Object.values(this.state).reduce(
      (total, value) => (total += value),
      0
    );

    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const totalFeedbackCount = this.countTotalFeedback();
    if (totalFeedbackCount === 0) return 0;

    const { good: goodFeedbackCount } = this.state;
    const positivePercentageValue =
      (goodFeedbackCount / totalFeedbackCount) * 100;
    return positivePercentageValue.toFixed(0);
  };

  render() {
    const { good, bad, neutral } = this.state;
    const totalFeedbackCount = this.countTotalFeedback();
    const positiveFeedbackPercentage = this.countPositiveFeedbackPercentage();

    return (
      <div className={s.wrapper}>
        <section className={s.container}>
          <Section title="Please leave feedback">
            <FeedbackOptions
              options={Object.keys(this.state)}
              onLeaveFeedback={this.updateStats}
            />
          </Section>

          <Section title="Statistics">
            {totalFeedbackCount === 0 ? (
              <Notification message="There is no feedback" />
            ) : (
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={totalFeedbackCount}
                positivePercentage={positiveFeedbackPercentage}
              />
            )}
          </Section>
        </section>
      </div>
    );
  }
}

export default App;
