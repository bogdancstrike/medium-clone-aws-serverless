import React from 'react';
import { List } from 'antd';
import { Link } from 'react-router-dom';
import './HomePage.css';

function HomePage({ articles }) {
  return (
    <div className="homepage-container">
      <List
        itemLayout="vertical"
        dataSource={articles}
        renderItem={(article) => (
          <List.Item className="article-item">
            <Link to={`/article/${article.id}`} className="article-link">
              <h3 className="article-title">{article.title}</h3>
              <p className="article-description">{article.description}</p>
              <span className="article-meta">Medium · acum {article.timeAgo}</span>
            </Link>
          </List.Item>
        )}
      />
    </div>
  );
}

export default HomePage;
