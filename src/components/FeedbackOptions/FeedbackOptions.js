import { OptionContainer, Option } from './FeedbackOptions.styled';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <OptionContainer>
      {options.map(option => {
        return (
          <Option type="button" key={option} name={option} onClick={() => onLeaveFeedback(option)}>
            {option}
          </Option>
        );
      })}
    </OptionContainer>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};