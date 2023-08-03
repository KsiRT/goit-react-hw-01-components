import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { Friends } from './Friends/Friends';

import React from 'react';
import user from '../assets/user.json';
import data from '../assets/data.json';
import friendList from '../assets/friends.json';
import transactions from '../assets/transactions.json';
import 'modern-normalize';
import { Transactions } from './Transactions/Transactions';

export const App = () => {
  return (
    <div>
      <Profile user={user} />
      <Statistics data={data} title="Upload stats" />
      <Friends list={friendList} />
      <Transactions data={transactions} />
    </div>
  );
};
