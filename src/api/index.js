import axios from 'axios';


const url = 'http://localhost:/posts';

export const fetchPosts = () => axios.get(url);

export const createPost = () =>(newPost) => axios.post(url, newPost);