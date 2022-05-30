import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Section from 'components/Section';
import FeedbackOptions from 'components/FeedbackOptions';
import Statistics from 'components/Statistics/Statistics';
import Notification from 'components/Notification';
import s from './EspressoStatistics.module.css';

class EsperssoStatistics extends Component {
  countTotalFeedback = () => {
    const { options } = this.props;
    const total = Object.values(options).reduce(
      (total, value) => (total += value),
      0
    );

    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const totalFeedbackCount = this.countTotalFeedback();
    if (totalFeedbackCount === 0) return 0;

    const { good: goodFeedbackCount } = this.props.options;
    const positivePercentageValue =
      (goodFeedbackCount / totalFeedbackCount) * 100;
    return positivePercentageValue.toFixed(2);
  };

  render() {
    const { options, onLeaveFeedback } = this.props;
    const { good, bad, neutral } = options;
    const totalFeedbackCount = this.countTotalFeedback();
    return (
      <section className={s.container}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(options)}
            onLeaveFeedback={onLeaveFeedback}
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
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </section>
    );
  }
}

EsperssoStatistics.propTypes = {
  options: PropTypes.shape({
    good: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
  }).isRequired,
};

export default EsperssoStatistics;
