import React from 'react';
import { Layout } from 'antd';
import AppHeader from './components/layout/AppHeader';
import AppContent from './components/layout/AppContent';
import AppSider from './components/layout/AppSider';
import AppFooter from './components/layout/AppFooter';

const App = () => (
  
    <Layout>
      <AppHeader />
      <Layout>
        <AppContent />
        <AppSider />
      </Layout>  
      <AppFooter />
    </Layout>
);

export default App;