import { Profile } from './Profile';
import React from 'react';
import user from '../assets/user.json';
import 'modern-normalize';

export const App = () => {
  return <Profile user={user} />;
};
