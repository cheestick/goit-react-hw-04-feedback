import PropTypes from 'prop-types';
import s from './Notification.module.css';

const Notification = ({ message }) => (
  <section className={s.container}>{message}</section>
);

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
