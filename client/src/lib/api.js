import axios from 'axios';

const API = import.meta.env.VITE_API_URL;
const client = axios.create(
    {
        baseURL: API,
        headers: {
            'Content-Type': 'application/json',
        },
    }   
);


// Post Endpoints
export const postsAPI = {
  getAll: async () => {
    const response = await client.get('/posts');
    return response.data;
  },

  getOne: async (id) => {
    const response = await client.get(`/posts/${id}`);
    return response.data;
  },

  create: async (data) => {
    const response = await client.post('/posts', data);
    return response.data;
  },

  update: async (id, data) => {
    const response = await client.put(`/posts/${id}`, data);
    return response.data;
  },

  delete: async (id) => {
    const response = await client.delete(`/posts/${id}`);
    return response.data;
  },
};

// Category Endpoints
export const categoriesAPI = {
  getAll: async () => {
    const response = await client.get('/categories');
    return response.data;
  },

  create: async (data) => {
    const response = await client.post('/categories', data);
    return response.data;
  },
};

// Notes Endpoints
export const NotesAPI = {
  getAll: async (userId) => {
    const response = await client.get(`/notes`, { params: { userId } });
    return response.data;
  },

  create: async (data) => {
    const response = await client.post(`/notes`, data);
    return response.data;
  },

  update: async (id, data) => {
    const response = await client.put(`/notes/${id}`, data);
    return response.data;
  },

  remove: async (id) => {
    const response = await client.delete(`/notes/${id}`);
    return response.data;
  },
};
