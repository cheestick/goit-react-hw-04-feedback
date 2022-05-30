import React, { Component } from 'react';
import EspressoStatistics from 'components/EspressoStatistics';

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

  render() {
    return (
      <div
        style={{
          minHeight: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 34,
          color: '#010101',
        }}
      >
        <EspressoStatistics
          options={{ ...this.state }}
          onLeaveFeedback={this.updateStats}
        />
      </div>
    );
  }
}

export default App;
