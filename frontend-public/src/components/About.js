import React, { useState, useEffect } from 'react';
import { Spin } from 'antd';
import { fetchAboutContent } from '../network';

function About() {
  const [content, setContent] = useState("");

  useEffect(() => {
    const getContent = async () => {
      const aboutContent = await fetchAboutContent();
      setContent(aboutContent);
    };

    getContent();
  }, []);

  if (!content) {
    return (
      <div className="spinner-container">
        <Spin size="large" />
      </div>
    );
  }

  return (
    <div className="article-page-container">
      <h1 className="article-title">About Us</h1>
      <p className="article-content">
        {content}
      </p>
    </div>
  );
}

export default About;
