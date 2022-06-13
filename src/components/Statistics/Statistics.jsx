import PropTypes from 'prop-types';
import s from './Statistics.module.css';

const Statistics = ({ good, bad, neutral, total, positivePercentage }) => {
  return (
    <ul className={s.stats}>
      <li className={s.statRow}>
        <span>Good:</span>
        <span className={s.statValue}>{good}</span>
      </li>
      <li className={s.statRow}>
        <span>Neutral:</span>
        <span className={s.statValue}>{neutral}</span>
      </li>
      <li className={s.statRow}>
        <span>Bad:</span>
        <span className={s.statValue}>{bad}</span>
      </li>
      <li className={s.statRow}>
        <span>Total:</span>
        <span className={s.statValue}>{total}</span>
      </li>
      <li className={s.statRow}>
        <span>Positive feedback:</span>
        <span className={s.statValue}>{positivePercentage}%</span>
      </li>
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};

export default Statistics;
