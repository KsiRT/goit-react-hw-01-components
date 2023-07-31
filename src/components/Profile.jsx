import React from 'react';
import PropTypes from 'prop-types';
import { Card } from './Card/Card';
import { Description } from './Description/Description';
import { Avatar } from './Avatar/Avatar';
import { UserName } from './UserName/UserName';
import { UserInfo } from './UserInfo/UserInfo';

export function Profile({ user }) {
  const { username, tag, location, avatar, stats } = user;
  return (
    <Card>
      <Description>
        <Avatar src={avatar} alt="User avatar" />
        <UserName>{username}</UserName>
        <UserInfo>{tag}</UserInfo>
        <UserInfo>{location}</UserInfo>
      </Description>

      <ul>
        <li>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </li>
        <li>
          <span>Views</span>
          <span>{stats.views}</span>
        </li>
        <li>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </Card>
  );
}

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    vievs: PropTypes.number,
    likes: PropTypes.number,
  }),
};
