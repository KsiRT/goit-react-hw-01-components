import React from 'react';
import PropTypes from 'prop-types';
import {
  Avatar,
  FriendItem,
  FriendList,
  Name,
  Offline,
  Online,
  Status,
} from './FriendsStyled';

export const Friends = ({ list }) => {
  return (
    <FriendList>
      {list.map(object => {
        return (
          <FriendItem key={object.id}>
            <Status>{object.isOnline ? <Online /> : <Offline />}</Status>
            <Avatar src={object.avatar} alt="User avatar" width="48" />
            <Name>{object.name}</Name>
          </FriendItem>
        );
      })}
    </FriendList>
  );
};

Friends.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string,
      name: PropTypes.string.isRequired,
    })
  ),
};
