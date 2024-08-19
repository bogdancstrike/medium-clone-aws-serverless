import React, { useState, useEffect } from 'react';
import { Spin } from 'antd';
import { fetchContactContent } from '../network';

function Contact() {
  const [content, setContent] = useState("");

  useEffect(() => {
    const getContent = async () => {
      const contactContent = await fetchContactContent();
      setContent(contactContent);
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
      <h1 className="article-title">Contact Us</h1>
      <p className="article-content">
        {content}
      </p>
    </div>
  );
}

export default Contact;
