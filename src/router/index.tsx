import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from 'pages/Home';
import UserPosts from 'pages/UserPosts';
import UserPostDetail from 'pages/UserPostDetail';
import { HOME, USER_POSTS, USER_POST_DETAIL } from './paths';

const Router = () => (
  <Routes>
    <Route path={HOME()} element={<Home />} />
    <Route path={USER_POSTS()} element={<UserPosts />} />
    <Route path={USER_POST_DETAIL()} element={<UserPostDetail />} />
  </Routes>
);

export default Router;
