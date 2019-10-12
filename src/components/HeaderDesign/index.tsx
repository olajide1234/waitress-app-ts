import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom'
import { Menu, Icon, PageHeader, Row, Col, Divider } from 'antd';


interface EventClick {
  key: string
}

function HeaderDesign() {
  let { pathname } = useLocation();
  let history = useHistory();

  const [currentDetails, setCurrentDetails] = useState({ current: pathname });

  useEffect(() => {
    setCurrentDetails({ ...currentDetails, current: pathname });
  }, [pathname]);

  function handleClick(e: EventClick): void {
    const { key } = e;
    history.push(key);
  };

  return (
    <>
      <Row>
        <Col span={10} offset={10}>
          <PageHeader title="Waitress application" />
        </Col>
      </Row>
      <Row>
        <Col>
          <Menu style={{ textAlign: 'center' }} onClick={handleClick} selectedKeys={[currentDetails.current]} mode="horizontal" theme="dark">
            <Menu.Item key="/" value="viewOrders">
              <Icon type="appstore" />
              View orders
            </Menu.Item>

            <Menu.Item key="/form" value="takeOrders">
              <Icon type="appstore" />
              Take order
            </Menu.Item>
          </Menu>
        </Col>
      </Row>
      <Divider />
    </>
  );
}

export default HeaderDesign;
