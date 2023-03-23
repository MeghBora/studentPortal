import React from 'react';
import { Layout, Space } from 'antd';

const { Header, Footer, Sider, Content } = Layout;
const headerStyle = {
    textAlign: 'center',
    color: '#fff',
    height: 64,
    paddingInline: 50,
    lineHeight: '64px',
    backgroundColor: 'rgb(62, 35, 98)',
  };
const contentStyle = {
    textAlign: 'center',
    minHeight: 120,
    lineHeight: '120px',
    color: 'black',
    backgroundColor: '#ffff',
  };
const siderStyle = {
    textAlign: 'center',
    lineHeight: '120px',
    color: '#fff',
    backgroundColor: 'rgb(62, 35, 98)',
};


const AdminDash = () => {
  return (
    <>
    <Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
         <Layout>
             <Sider style={siderStyle}>Sider</Sider>
                <Layout>
                     <Header style={headerStyle}>Welcome Back Admin</Header>
                     <Content style={contentStyle}>Content</Content>
                </Layout>
         </Layout>                                                          
   </Space>
    </>
  )
}

export default AdminDash;