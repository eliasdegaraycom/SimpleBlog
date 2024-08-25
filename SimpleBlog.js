import React, { useState } from 'react';

const BlogApp = () => {
  const [posts, setPosts] = useState([
    { title: 'First Post', content: 'This is the content of the first post.' },
    { title: 'Second Post', content: 'This is the content of the second post.' }
  ]);

  const addPost = (title, content) => {
    const newPost = { title, content };
    setPosts([...posts, newPost]);
  };

  return (
    <div className="blog-app">
      <h1>Simple Blog</h1>
      <CreatePost addPost={addPost} />
      <PostList posts={posts} />
    </div>
  );
};

const PostList = ({ posts }) => (
  <div className="post-list">
    {posts.map((post, index) => (
      <Post key={index} post={post} />
    ))}
  </div>
);

const Post = ({ post }) => (
  <div className="post">
    <h2>{post.title}</h2>
    <p>{post.content}</p>
  </div>
);

const CreatePost = ({ addPost }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && content) {
      addPost(title, content);
      setTitle('');
      setContent('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="create-post">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Content"
      ></textarea>
      <button type="submit">Add Post</button>
    </form>
  );
};

export default BlogApp;

