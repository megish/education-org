import { Layout } from 'antd';

const contentStyle = {
    textAlign: 'center',
    minHeight: 'calc(100vh - 60px)',
    color: '#000000',
    backgroundColor: '#FFFFFF',
  };

export default function AppContent() {
    return (<Layout.Content style={contentStyle}>Content</Layout.Content>)
}