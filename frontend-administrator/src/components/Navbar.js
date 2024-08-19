import React from 'react';
import { Menu, Dropdown, Button } from 'antd';
import { Link } from 'react-router-dom';
import { DownOutlined } from '@ant-design/icons';

function Navbar() {
  const menu = (
    <Menu>
      <Menu.Item key="articles">
        <Link to="/articles">Articles</Link>
      </Menu.Item>
      <Menu.Item key="about">
        <Link to="/about">About</Link>
      </Menu.Item>
      <Menu.Item key="contact">
        <Link to="/contact">Contact</Link>
      </Menu.Item>
    </Menu>
  );

  return (
    <div style={{ padding: '10px 20px', background: '#2c3e50' }}>
      <Dropdown overlay={menu}>
        <Button type="primary" shape="round" icon={<DownOutlined />} size="large">
          Menu
        </Button>
      </Dropdown>
    </div>
  );
}

export default Navbar;
