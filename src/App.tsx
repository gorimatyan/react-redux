import React from 'react';
import logo from './logo.svg';
import './App.css';
import PostsList from './features/posts/PostsList';
import Counter from './features/counter/Counter';
import AddPostForm from './features/posts/AddPostForm';
import ChakraRoute from './chakraComponents/ChakraRoute';
import Pricing from './chakraComponents/Pricing';


function App() {
  return (
    <div className="App">
      <ChakraRoute />
      <Pricing />
      <hr />
      <Counter />
      <AddPostForm />
      <PostsList />
    </div>
  );
}

export default App;
