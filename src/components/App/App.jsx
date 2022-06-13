import React from 'react';
import Section from 'components/Section';
import FeedbackOptions from 'components/FeedbackOptions';
import Statistics from 'components/Statistics';
import Notification from 'components/Notification';
import s from './App.module.css';
import { useStatisticsCounter } from 'hooks/useStatisticsCounter';

const App = () => {
  const [stats, setStats] = useStatisticsCounter({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const countTotalFeedback = () => {
    const total = Object.values(stats).reduce(
      (total, value) => (total += value),
      0
    );

    return total;
  };

  const countPositiveFeedbackPercentage = () => {
    const totalFeedbackCount = countTotalFeedback();
    if (totalFeedbackCount === 0) return 0;

    const positivePercentageValue = (stats.good / totalFeedbackCount) * 100;
    return positivePercentageValue.toFixed(0);
  };

  const { good, neutral, bad } = stats;

  return (
    <div className={s.wrapper}>
      <section className={s.container}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(stats)}
            onLeaveFeedback={setStats}
          />
        </Section>

        <Section title="Statistics">
          {countTotalFeedback() === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </section>
    </div>
  );
};

export default App;
