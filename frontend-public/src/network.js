import axios from 'axios';

const API_URL = 'https://ix8kmzdxub.execute-api.eu-north-1.amazonaws.com/dev';

// Fetch Articles
export const fetchArticles = async () => {
  try {
    const response = await axios.get(`${API_URL}/articles`);
    return response.data;
  } catch (error) {
    console.error('Error fetching articles:', error);
    throw error;
  }
};

// Fetch Article by ID
export const fetchArticleById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/articles?id=${id}`);
    // Since the response is an array, return the first item if it exists
    return response.data.length > 0 ? response.data[0] : null;
  } catch (error) {
    console.error(`Error fetching article with ID ${id}:`, error);
    throw error;
  }
};


// Fetch About Content
export const fetchAboutContent = async () => {
  try {
    const response = await axios.get(`${API_URL}/about`);
    return response.data;
  } catch (error) {
    console.error('Error fetching about content:', error);
    throw error;
  }
};

// Fetch Contact Content
export const fetchContactContent = async () => {
  try {
    const response = await axios.get(`${API_URL}/contact`);
    return response.data;
  } catch (error) {
    console.error('Error fetching contact content:', error);
    throw error;
  }
};
