import React from 'react';
import ReactRouter from "react-router";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar/Navbar';

import PostsPage from './pages/posts/PostsPage';
import PostPage from './pages/post/PostPage';
import HomePage from './pages/home/HomePage';



function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
          <Routes>
            <Route path='/posts' element={<PostsPage/>}/>
            <Route path='/post/:id' element={<PostPage/>}/>
            <Route path='/' element={<HomePage/>}/>
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
