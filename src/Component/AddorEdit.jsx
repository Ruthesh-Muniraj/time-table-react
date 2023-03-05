import { Col, Divider, Empty, List, Modal, Row } from "antd";
import React from "react";
import { courses } from "../constant/data";
import StaffDetailForm from "./StaffDetailForm";
import { AppContext } from "../App";

const AddorEdit = ({ isOpen, isOdd, semesters, setIsOpen }) => {
  const appContext = React.useContext(AppContext);
  const [staff, setStaff] = React.useState([]);
  const [option, setOption] = React.useState([]);

  const subjects = [];
  let optionArray = [];

  semesters &&
    semesters.map((semester) => {
      const sem = semester[0].split("SEM").slice(1).join("");
      if (isOdd && sem % 2 !== 0) {
        subjects.push(...semester[1].courses);
      } else if (!isOdd && sem % 2 === 0) {
        subjects.push(...semester[1].courses);
      }
      return null;
    });

  subjects.forEach((subject) => {
    optionArray.push({
      label: `${courses[subject].nick}-${courses[subject].slot}`,
      value: subject,
    });
  });

  const onFinish = (values) => {
    setStaff((staff) => [...staff, values]);
    appContext.update(values);
    if (values) {
      const options = [...optionArray];
      const filteredArray = options.filter(function (e) {
        return this.indexOf(e.value) < 0;
      }, values.subject);
      setOption(filteredArray);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.error("Failed:", errorInfo);
  };

  return (
    <Modal
      footer={null}
      title="Add Teaching Staff"
      open={isOpen}
      width={1000}
      onCancel={() => {
        setIsOpen(false);
        setStaff([]);
      }}
    >
      <Row>
        <Col span={10}>
          <Divider orientation="left">Enter Staff details</Divider>
          <StaffDetailForm
            option={staff.length ? option : optionArray}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          />
        </Col>
        <Col span={14}>
          <div className="staff-preview">
            <Divider orientation="left">Staffs Preview</Divider>
            <div className="staff-container">
              {appContext.contextValue?.length ? (
                appContext.contextValue.map((staff, index) => (
                  <List
                    key={index}
                    size="small"
                    header={<h3>{staff.name}</h3>}
                    bordered
                    dataSource={staff.subject}
                    renderItem={(item) => <List.Item>{item}</List.Item>}
                  />
                ))
              ) : (
                <Empty description={<span>No staff</span>} />
              )}
            </div>
          </div>
        </Col>
      </Row>
    </Modal>
  );
};

export default AddorEdit;
