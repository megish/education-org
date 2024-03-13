import { Layout, Descriptions } from 'antd';

const items = [
    {
      key: '1',
      children: 'Республика Крым, г. Алушта, ул. Сурикова, д. 30',
    },
]    

const siderStyle = {
    textAlign: 'center',
    lineHeight: '120px',
    color: '#000000',
    backgroundColor: '#FFFFFF',
  };

export default function AppSider() {
    return (
        <Layout.Sider width="25%" style={siderStyle}>
            <Descriptions title="Адрес" items={items} />;
        </Layout.Sider>
    )    
}        