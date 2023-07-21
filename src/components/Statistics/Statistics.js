import { Wrap, Text } from './Statistics.styled';
import PropTypes from 'prop-types';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <Wrap>
      <Text>Good: {good}</Text>
      <Text>Neutral: {neutral}</Text>
      <Text>Bad: {bad}</Text>
      <Text>Total: {total}</Text>
      <Text>Positive feedback: {positivePercentage}%</Text>
    </Wrap>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
