import PropTypes from 'prop-types';
import { List } from './FriendList.styled';
import { FriendListItem } from 'components/FriendListItem/FriendListItem';
export function FriendList({ friends }) {
  return (
    <List>
      {friends.map(({ id, name, avatar, isOnline }) => (
        <FriendListItem
          name={name}
          avatar={avatar}
          status={isOnline}
          key={id}
        />
      ))}
    </List>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
