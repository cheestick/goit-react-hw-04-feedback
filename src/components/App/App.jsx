import React from 'react';
import Section from 'components/Section';
import FeedbackOptions from 'components/FeedbackOptions';
import Statistics from 'components/Statistics';
import Notification from 'components/Notification';
import s from './App.module.css';
import { useCounter } from 'hooks/useCounter';

const App = () => {
  const [good, setGood] = useCounter(0);
  const [neutral, setNeutral] = useCounter(0);
  const [bad, setBad] = useCounter(0);

  const countTotalFeedback = () => good + neutral + bad;

  const countPositiveFeedbackPercentage = () => {
    const totalFeedbackCount = countTotalFeedback();
    if (totalFeedbackCount === 0) return 0;

    const positivePercentageValue = (good / totalFeedbackCount) * 100;
    return positivePercentageValue.toFixed(0);
  };

  return (
    <div className={s.wrapper}>
      <section className={s.container}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={[setGood, setNeutral, setBad]}
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
