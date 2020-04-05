import React from 'react';
import Profile from './components/profile/Profile';
import user from './components/profile/user';
import Statistics from './components/statistics/Statistics';
import statisticalData from './components/statistics/statistical-data';
import FriendList from './components/friend-list/FriendList';
import friends from './components/friend-list/friends';
import TransactionHistory from './components/transaction/TransactionHistory';
import transactions from './components/transaction/transactions';

const App = () => (
  <>
    <Profile
      name={user.name}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
    <Statistics title="Upload stats" stats={statisticalData} />
    <FriendList friends={friends} />
    <TransactionHistory items={transactions} />
  </>
);

export default App;
