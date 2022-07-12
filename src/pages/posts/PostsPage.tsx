import React from 'react'
import Posts from './Posts'
import "../index.scss";

export default function PostsPage() {
  return (
    <div className='page posts'>
      <div className="container">
        <Posts/>
      </div>
    </div>
  )
}
