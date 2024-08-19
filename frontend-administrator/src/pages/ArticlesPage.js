import React, { useState, useEffect } from 'react';
import { Table, Button, Modal, Form, Input, Space } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { fetchArticles, saveArticle, deleteArticle } from '../network';
import ArticleForm from '../components/ArticleForm';

function ArticlesPage() {
  const [articles, setArticles] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentArticle, setCurrentArticle] = useState(null);

  useEffect(() => {
    const loadArticles = async () => {
      try {
        const data = await fetchArticles();
        setArticles(data);
      } catch (error) {
        // Handle error if necessary
      }
    };
    loadArticles();
  }, []);

  const handleCreate = async (values) => {
    const newArticle = await saveArticle(values);
    setArticles([...articles, newArticle]);
    setIsModalVisible(false);
  };

  const handleEdit = (article) => {
    setCurrentArticle(article);
    setIsModalVisible(true);
  };

  const handleDelete = async (id) => {
    await deleteArticle(id);
    setArticles(articles.filter(article => article.id !== id));
  };

  const columns = [
    { title: 'Title', dataIndex: 'title', key: 'title' },
    { title: 'Description', dataIndex: 'description', key: 'description' },
    {
      title: 'Actions',
      key: 'actions',
      render: (_, record) => (
        <Space size="middle">
          <Button onClick={() => handleEdit(record)} type="link">Edit</Button>
          <Button danger onClick={() => handleDelete(record.id)} type="link">Delete</Button>
        </Space>
      ),
    },
  ];

  return (
    <div className="page-container">
      <Table
        columns={columns}
        dataSource={articles}
        rowKey="id"
        pagination={false} // Optional: Disable pagination if not needed
        bordered
      />
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <Button
          type="primary"
          icon={<PlusOutlined />}
          size="large"
          onClick={() => setIsModalVisible(true)}
        >
          Add Article
        </Button>
      </div>
      <Modal
        title={currentArticle ? "Edit Article" : "Create Article"}
        visible={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={null}
      >
        <ArticleForm
          article={currentArticle}
          onSubmit={handleCreate}
          onUpdate={handleEdit}
        />
      </Modal>
    </div>
  );
}

export default ArticlesPage;
