import React from 'react';
import GlobalStyles, { Container } from './App.style';
import { Dashboard } from './pages/dashboard/';
import withStorage from './utils/withStorage';

const EnhancedDashboard = withStorage(Dashboard);

const App = () => (
  <Container>
    <GlobalStyles />
    <EnhancedDashboard />
  </Container>
);

export default App;
