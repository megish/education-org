import { Layout } from 'antd';

const footerStyle = {
    textAlign: 'center',
    color: '#000000',
    backgroundColor: '#4096ff',
  };

export default function AppFooter() {
    return <Layout.Footer style={footerStyle}>Footer</Layout.Footer>
}