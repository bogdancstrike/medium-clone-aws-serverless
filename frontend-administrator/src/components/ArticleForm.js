import React, { useEffect } from 'react';
import { Form, Input, Button } from 'antd';

function ArticleForm({ article, onSubmit }) {
  const [form] = Form.useForm();

  useEffect(() => {
    if (article) {
      form.setFieldsValue(article);
    } else {
      form.resetFields();
    }
  }, [article, form]);

  const onFinish = (values) => {
    onSubmit(values);
    form.resetFields();
  };

  return (
    <Form form={form} onFinish={onFinish} layout="vertical">
      <Form.Item name="title" label="Title" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name="description" label="Description" rules={[{ required: true }]}>
        <Input.TextArea rows={4} />
      </Form.Item>
      <Form.Item name="content" label="Content" rules={[{ required: true }]}>
        <Input.TextArea rows={6} />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" block>
          {article ? "Update" : "Create"}
        </Button>
      </Form.Item>
    </Form>
  );
}

export default ArticleForm;
