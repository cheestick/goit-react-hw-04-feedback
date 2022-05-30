import React, { Component } from 'react';
import Section from './Section';
import FeedbackOptions from './FeedbackOptions';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Section title="Please leave feedback">
          <FeedbackOptions options={{ ...this.state }} onLeaveFeedback={1} />
        </Section>
        <Section title="Statistics">Stats</Section>
      </div>
    );
  }
}

export default App;
