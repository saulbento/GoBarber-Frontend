import React from 'react';

import { Container } from './styles';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <h1>Hello you are in the Dashboard</h1>

      <a href="/" onClick={() => localStorage.clear()}>
        logout
      </a>
    </Container>
  );
};
export default Dashboard;
