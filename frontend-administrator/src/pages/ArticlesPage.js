import React, { useState, useEffect } from 'react';
import { Table, Button, Modal, Form, Input, Space, message } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import ArticleForm from '../components/ArticleForm';
import { fetchArticles, saveArticle, deleteArticle } from '../network';

function ArticlesPage() {
  const [articles, setArticles] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentArticle, setCurrentArticle] = useState(null);

  // Fetch articles from the backend
  const loadArticles = async () => {
    const articlesData = await fetchArticles();
    setArticles(articlesData);
  };

  useEffect(() => {
    loadArticles();
  }, []);

  const handleCreateOrUpdate = async (article) => {
    try {
      if (currentArticle) {
        article.id = currentArticle.id; // Ensure the ID is set for updates
      }
      await saveArticle(article);
      setIsModalVisible(false);
      setCurrentArticle(null); // Clear the current article after submission
      loadArticles(); // Reload articles after saving to ensure the new one is fetched
      message.success(`Article ${article.id ? 'updated' : 'created'} successfully`);
    } catch (error) {
      message.error("Error saving article");
    }
  };

  const handleEdit = (article) => {
    setCurrentArticle(article);
    setIsModalVisible(true);
  };

  const handleDelete = async (id) => {
    try {
      await deleteArticle(id);
      loadArticles();
      message.success('Article deleted successfully');
    } catch (error) {
      message.error("Error deleting article");
    }
  };

  const columns = [
    { title: 'Title', dataIndex: 'title', key: 'title' },
    { title: 'Description', dataIndex: 'description', key: 'description' },
    { 
      title: 'Content', 
      dataIndex: 'content', 
      key: 'content', 
      render: (text) => (
        <div>
          {text.length > 100 ? `${text.substring(0, 100)}...` : text}
        </div>
      )
    },
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
        pagination={false}
        bordered
      />
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <Button
          type="primary"
          icon={<PlusOutlined />}
          size="large"
          onClick={() => {
            setCurrentArticle(null);
            setIsModalVisible(true);
          }}
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
          onSubmit={handleCreateOrUpdate}
        />
      </Modal>
    </div>
  );
}

export default ArticlesPage;
