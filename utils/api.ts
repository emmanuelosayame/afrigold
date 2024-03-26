import axios from 'axios';

const token = () =>
  typeof window !== 'undefined'
    ? localStorage.getItem('auth.token')
    : undefined;

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: { Authorization: `Bearer ${token()}` },
});
