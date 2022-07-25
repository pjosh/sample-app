export const getPosts = () =>
  fetch('https://jsonplaceholder.typicode.com/posts').then((res) => res.json());

export const getPostComments = (id: string | number) =>
  fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`).then((res) => res.json());

export const getUsers = () =>
  fetch('https://jsonplaceholder.typicode.com/users').then((res) => res.json());
