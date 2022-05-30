// import PropTypes from 'prop-types';
import s from './Statistics.module.css';

const Statistics = props => {
  const { good, bad, neutral, total, positivePercentage } = props;
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

export default Statistics;
