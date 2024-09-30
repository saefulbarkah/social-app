import React from 'react';
import { UserPosts } from './components/user-post';
import { CreatePost } from './components/create-post';

export const Home = () => {
  return (
    <div className="grid grid-cols-1 space-y-4">
      <CreatePost />
      <UserPosts />
    </div>
  );
};
