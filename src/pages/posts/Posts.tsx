import React, {useEffect, useState} from 'react'

import { Link } from 'react-router-dom';
import { IPost } from "../../types";

export default function Posts() {
  const [posts, setPosts] = useState<IPost[]>([] as IPost[]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => setPosts(json))
  }, []);

  return (
    <div className='posts-list'>
      {posts.map((post: IPost) => (
        <Link key={post.id} to={`/post/${post.id}`}>
          <div className='post'>
            <h1 className='title'>{post.title}</h1>
          </div>
        </Link>
      ))}
    </div>
  )
}
