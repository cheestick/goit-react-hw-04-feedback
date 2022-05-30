import React, { Component } from 'react';
import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

class FeedbackOptions extends Component {
  onLeaveFeedback = e => {
    const { name } = e.currentTarget;
    this.props.onLeaveFeedback(name);
  };

  render() {
    const { options } = this.props;
    return (
      <div className={s.wrapper}>
        {options.map(type => (
          <button
            key={type}
            className={s.button}
            name={type}
            onClick={this.onLeaveFeedback}
          >
            {type}
          </button>
        ))}
      </div>
    );
  }
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
