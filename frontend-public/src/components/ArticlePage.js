import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Spin } from "antd";
import { fetchArticleById } from "../network";
import "./ArticlePage.css";

function ArticlePage() {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    const getArticle = async () => {
      const articleData = await fetchArticleById(id);
      setArticle(articleData);
    };

    getArticle();
  }, [id]);

  if (!article) {
    return (
      <div className="spinner-container">
        <Spin size="large" />
      </div>
    );
  }

  return (
    <div className="article-page-container">
      <h1 className="article-title">{article.title}</h1>
      <div className="article-description">{article.description}</div>
      <div
        className="article-content"
        dangerouslySetInnerHTML={{ __html: article.content }}
      />
    </div>
  );
}

export default ArticlePage;
