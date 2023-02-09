import PropTypes from 'prop-types';
import { Avatar, Name, Item, Status } from './FriendListItem.styled';
export function FriendListItem({ avatar, status, name, id }) {
  return (
    <Item key={id}>
      <Status status={status}></Status>
      <Avatar src={avatar} alt="User avatar" width="48" />
      <Name>{name}</Name>
    </Item>
  );
}
FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
};
