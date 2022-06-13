import React from 'react';
import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={s.wrapper}>
      {options.map((type, i) => (
        <button
          key={type}
          className={s.button}
          name={type}
          onClick={() => onLeaveFeedback[i]()}
        >
          {type}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.arrayOf(PropTypes.func).isRequired,
};

export default FeedbackOptions;
