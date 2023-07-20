import { OptionContainer, Option } from './FeedbackOptions.styled';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <OptionContainer>
      {options.map(key => {
        return (
          <Option type="button" key={key} onClick={onLeaveFeedback}>
            {key}
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