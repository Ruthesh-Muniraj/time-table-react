import { Alert, Col, Divider, Row, Typography } from "antd";
import React from "react";

const Header = () => {
  return (
    <>
      <Row justify="center" gutter={[16, 16]}>
        <img src="snr-logo.jpeg" alt="" />
        <Col>
          <Typography.Title level={1} style={{ margin: 0 }}>
            Sri Ramakrishna Institute of Technology
          </Typography.Title>
          <Typography.Title level={2} style={{ margin: 0 }}>
            Time Table Generatore
          </Typography.Title>
        </Col>
      </Row>
      <Divider />
      <Row>
        <Col span={12} offset={6}>
          <Alert
            message="This Computer generated timetable. Please Download before closing."
            type="warning"
            showIcon
          />
        </Col>
      </Row>
    </>
  );
};

export default Header;
