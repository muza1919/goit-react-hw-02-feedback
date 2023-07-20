import { Notification } from "./NotificationMessage.styled";
import PropTypes from 'prop-types';

export const NotificationMessage = ({ message }) => {
    return (
        <Notification>{message}</Notification>
    );
};

NotificationMessage.propTypes = {
    message: PropTypes.string.isRequired,
}