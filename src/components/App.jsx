import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';

import React from 'react';
import user from '../assets/user.json';
import data from '../assets/data.json';
import 'modern-normalize';

export const App = () => {
  return (
    <div>
      <Profile user={user} />
      <Statistics data={data} />
    </div>
  );
};
