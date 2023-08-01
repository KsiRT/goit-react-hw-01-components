import React from 'react';
import PropTypes from 'prop-types';
import { Card } from './Card/Card';
import { Description } from './Description/Description';
import { Avatar } from './Avatar/Avatar';
import { UserName } from './UserName/UserName';
import { UserInfo } from './UserInfo/UserInfo';
import { StatisticList } from './StatisticList/StatisticList';
import { StatisticItem } from './StatisticItem/StatisticItem';
import { StatisticName } from './StatisticName/StatisticName';

export function Profile({ user }) {
  const { username, tag, location, avatar, stats } = user;
  return (
    <Card>
      <Description>
        <Avatar src={avatar} alt="User avatar" />
        <UserName>{username}</UserName>
        <UserInfo>@{tag}</UserInfo>
        <UserInfo>{location}</UserInfo>
      </Description>

      <StatisticList>
        <StatisticItem>
          <StatisticName>Followers</StatisticName>
          <span>{stats.followers}</span>
        </StatisticItem>
        <StatisticItem>
          <StatisticName>Views</StatisticName>
          <span>{stats.views}</span>
        </StatisticItem>
        <StatisticItem>
          <StatisticName>Likes</StatisticName>
          <span>{stats.likes}</span>
        </StatisticItem>
      </StatisticList>
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
