import { Button, Col, Divider, Empty, List, Modal, Row } from "antd";
import React from "react";
import { colors, courses } from "../constant/data";
import StaffDetailForm from "./StaffDetailForm";

const AddorEdit = ({ isOpen, isOdd, semesters, setIsOpen, handleOk }) => {
  const [staff, setStaff] = React.useState([]);
  const [staffOpen, setStaffOpen] = React.useState(false);
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
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const setNewOptions = async () => {
    const options = [...optionArray];
    const dummy = staff.map((staff) => staff.subject);
    let subject = [];
    for (var i = 0; i < dummy.length; i++) {
      subject = subject.concat(dummy[i]);
    }

    const filteredArray = options.filter(function (e) {
      return this.indexOf(e.value) < 0;
    }, subject);
    setOption(filteredArray);
  };

  React.useEffect(() => {
    staff.length && setNewOptions() 
  }, [staff]);

  return (
    <Modal
      title="Add/ Edit Teaching Staff"
      open={isOpen}
      width={1000}
      onOk={handleOk}
      onCancel={() => {
        setIsOpen(false);
      }}
    >
      <Row>
        <Col span={10}>
          <Button
            type="primary"
            onClick={() => {
              setStaffOpen(true);
            }}
          >
            Add Staff
          </Button>
          <StaffDetailForm
            staffOpen={staffOpen}
            setStaffOpen={setStaffOpen}
            option={staff.length ? option : optionArray}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          />
        </Col>
        <Col span={14}>
          <div className="staff-preview">
            <Divider orientation="left">Preview</Divider>
            <div className="staff-container">
              {staff?.length ? (
                staff.map((staff, index) => (
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
