import React from 'react';

import UsersList from '../components/UsersList';

const Users = () => {
  const USERS = [
    {
      id: 'u1',
      name: 'Max Schwarz',
      pwd: 'abcd',
      notes: 3
    }
  ];

  return <UsersList items={USERS} />;
};

export default Users;
