// api.js
import axios from "axios";

const API_BASE_URL = "http://localhost:8000"; // Replace with your backend URL

export const fetchProjects = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/project`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
