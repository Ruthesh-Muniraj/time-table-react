import { Button, Divider, Form, Input, Modal, Select, Tag } from "antd";
import React from "react";
import { colors } from "../constant/data";

const StaffDetailForm = ({
  staffOpen,
  setStaffOpen,
  option,
  onFinish,
  onFinishFailed,
}) => {
  const [form] = Form.useForm();

  const tagRender = (props) => {
    const { label, value, closable, onClose } = props;
    const onPreventMouseDown = (event) => {
      event.preventDefault();
      event.stopPropagation();
    };
    return (
      <Tag
        color={colors[label.split("-").slice(1).join("")]}
        onMouseDown={onPreventMouseDown}
        closable={closable}
        onClose={onClose}
        style={{
          marginRight: 3,
        }}
      >
        {label}
      </Tag>
    );
  };

  const onSubmit = (values) => {
    form.resetFields();
    onFinish(values);
    setStaffOpen(false);
  };

  return (
    <Modal footer={null} open={staffOpen} onCancel={() => setStaffOpen(false)}>
      <Divider orientation="left">Staff details</Divider>
      <Form
        layout="vertical"
        form={form}
        onFinish={onSubmit}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          name="name"
          label="Name"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="subject"
          label="Subject"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select
            mode="multiple"
            showArrow
            allowClear
            tagRender={tagRender}
            placeholder="Select subjects"
            options={option}
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Add Staff
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default StaffDetailForm;
