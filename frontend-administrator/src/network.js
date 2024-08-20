import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

// Fetch About Content
export const fetchAboutContent = async () => {
  try {
    const response = await axios.get(`${API_URL}/about`);
    return response.data;
  } catch (error) {
    console.error("Error fetching about content:", error);
    throw error;
  }
};

// Fetch Contact Content
export const fetchContactContent = async () => {
  try {
    const response = await axios.get(`${API_URL}/contact`);
    return response.data;
  } catch (error) {
    console.error("Error fetching contact content:", error);
    throw error;
  }
};

// Save About Content
export const saveAboutContent = async (content) => {
  try {
    const response = await axios.post(`${API_URL}/about`, { content });
    return response.data;
  } catch (error) {
    console.error("Error saving about content:", error);
    throw error;
  }
};

// Save Contact Content
export const saveContactContent = async (content) => {
  try {
    const response = await axios.post(`${API_URL}/contact`, { content });
    return response.data;
  } catch (error) {
    console.error("Error saving contact content:", error);
    throw error;
  }
};

// Fetch Articles
export const fetchArticles = async () => {
  try {
    const response = await axios.get(`${API_URL}/articles`);
    return response.data;
  } catch (error) {
    console.error("Error fetching articles:", error);
    throw error;
  }
};

// Fetch Article by ID
export const fetchArticleById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/articles?id=${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching article with ID ${id}:`, error);
    throw error;
  }
};

// Create or Update Article
export const saveArticle = async (article) => {
  console.log(API_URL);
  try {
    if (article.id) {
      // Use PUT for updating an existing article
      const response = await axios.put(`${API_URL}/articles`, article);
      return response.data;
    } else {
      // Use POST for creating a new article
      const response = await axios.post(`${API_URL}/articles`, article);
      return response.data;
    }
  } catch (error) {
    console.error("Error saving article:", error);
    throw error;
  }
};


// Delete Article
export const deleteArticle = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/articles?id=${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting article with ID ${id}:`, error);
    throw error;
  }
};
