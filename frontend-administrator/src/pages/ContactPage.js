import React, { useState, useEffect } from 'react';
import { Form, Input, Button, Spin, notification, Modal } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

function ContactPage() {
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    // Fetch contact content from API (mocked)
    setTimeout(() => {
      setContent("This is the Contact page content that has been saved.");
      setLoading(false);
    }, 1000);
  }, []);

  const handleSave = (values) => {
    setContent(values.content);
    setIsModalVisible(false);
    notification.success({
      message: 'Content Saved',
      description: 'The content was successfully saved.',
    });
  };

  const handleEdit = () => {
    setIsModalVisible(true);
  };

  const handleDelete = () => {
    Modal.confirm({
      title: 'Are you sure you want to delete this content?',
      onOk: () => {
        setContent("");
        notification.success({
          message: 'Content Deleted',
          description: 'The content was successfully deleted.',
        });
      },
    });
  };

  if (loading) {
    return <Spin size="large" />;
  }

  return (
    <div className="page-container">
      {content ? (
        <>
          <div style={{ marginBottom: '20px' }}>
            <h2>Contact Us</h2>
            <p>{content}</p>
          </div>
          <div>
            <Button type="primary" icon={<EditOutlined />} onClick={handleEdit}>
              Edit
            </Button>
            <Button type="danger" icon={<DeleteOutlined />} onClick={handleDelete} style={{ marginLeft: '10px' }}>
              Delete
            </Button>
          </div>
        </>
      ) : (
        <div>
          <p>No content available. Click "Add Content" to create new content.</p>
          <Button type="primary" icon={<EditOutlined />} onClick={handleEdit}>
            Add Content
          </Button>
        </div>
      )}

      <Modal
        title={content ? "Edit Contact Us" : "Add Contact Us"}
        visible={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={null}
      >
        <Form
          initialValues={{ content }}
          onFinish={handleSave}
          layout="vertical"
        >
          <Form.Item name="content" label="Contact Us" rules={[{ required: true }]}>
            <Input.TextArea rows={8} />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Save
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}

export default ContactPage;
