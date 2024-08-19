import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import ArticlePage from "./components/ArticlePage";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import { fetchArticles } from "./network";

function App() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getArticles = async () => {
      const articlesData = await fetchArticles();
      setArticles(articlesData);
    };

    getArticles();
  }, []);

  return (
    <Router>
      <Navbar />
      <div className="page-container">
        <Routes>
          <Route path="/" element={<HomePage articles={articles} />} />
          <Route path="/article/:id" element={<ArticlePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
