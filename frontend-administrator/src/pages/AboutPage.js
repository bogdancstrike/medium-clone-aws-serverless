import React, { useState, useEffect } from 'react';
import { Form, Input, Button, Spin, notification, Modal } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { fetchAboutContent, saveAboutContent } from '../network';

function AboutPage() {
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    const loadContent = async () => {
      try {
        const data = await fetchAboutContent();
        setContent(data);
      } catch (error) {
        notification.error({ message: 'Failed to load content' });
      } finally {
        setLoading(false);
      }
    };
    loadContent();
  }, []);

  const handleSave = async (values) => {
    try {
      await saveAboutContent(values.content);
      setContent(values.content);
      setIsModalVisible(false);
      notification.success({ message: 'Content Saved', description: 'The content was successfully saved.' });
    } catch (error) {
      notification.error({ message: 'Failed to save content' });
    }
  };

  const handleEdit = () => {
    setIsModalVisible(true);
  };

  const handleDelete = () => {
    Modal.confirm({
      title: 'Are you sure you want to delete this content?',
      onOk: () => {
        setContent("");
        notification.success({ message: 'Content Deleted', description: 'The content was successfully deleted.' });
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
          <div className="content-section">
            <h2>About Us</h2>
            <p>{content}</p>
          </div>
          <div className="button-group">
            <Button type="primary" icon={<EditOutlined />} onClick={handleEdit}>
              Edit
            </Button>
            <Button type="danger" icon={<DeleteOutlined />} onClick={handleDelete} style={{ marginLeft: '10px' }}>
              Delete
            </Button>
          </div>
        </>
      ) : (
        <div className="content-section">
          <p>No content available. Click "Add Content" to create new content.</p>
          <Button type="primary" icon={<EditOutlined />} onClick={handleEdit}>
            Add Content
          </Button>
        </div>
      )}

      <Modal
        title={content ? "Edit About Us" : "Add About Us"}
        visible={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={null}
      >
        <Form
          initialValues={{ content }}
          onFinish={handleSave}
          layout="vertical"
        >
          <Form.Item name="content" label="About Us" rules={[{ required: true }]}>
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

export default AboutPage;
