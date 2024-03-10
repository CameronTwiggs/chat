import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'http://localhost:8080', // Replace with your API base URL
  timeout: 5000, // Set a timeout value in milliseconds
  headers: {
    'Content-Type': 'application/json', // Set the content type header
    // Add any other headers you need
  },
});

