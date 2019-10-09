import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import { Menu, Icon, PageHeader, Row, Col } from 'antd';

function HeaderDesign() {
  let history = useHistory();

  const [currentDetails, setCurrentDetails] = useState({ current: '' });

  function handleClick(e) {
    const { key } = e;
    key === "take" ? history.push("/form") : history.push("/");
    setCurrentDetails({ ...currentDetails, current: e.key });
  };

  return (
    <>
      <Row>
        <Col span={10} offset={9}>
          <PageHeader title="Waitress application" />
        </Col>
      </Row>
      <Row>
        <Col>
          <Menu onClick={handleClick} selectedKeys={[currentDetails.current]} mode="horizontal" theme="dark">
            <Menu.Item key="view" value="viewOrders">
              <Icon type="appstore" />
              View orders
            </Menu.Item>

            <Menu.Item key="take" value="takeOrders">
              <Icon type="appstore" />
              Take order
            </Menu.Item>
          </Menu>
        </Col>
      </Row>
    </>
  );
}

export default HeaderDesign;
