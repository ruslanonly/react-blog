import React, {useState, useEffect} from 'react'

import { IPost } from "../../types";

type PostProps = {
  id: number | string | undefined,
  onLoaded: () => void
}

export default function Post(props: PostProps) {
  const [post, setPost] = useState<IPost>({} as IPost);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${props.id}`)
    .then(response => response.json())
    .then(json => {
      setTimeout(() => {
        props.onLoaded();
        setPost(json);
      }, 100)
      
    });
  }, []);

  return (
    <div className='post'>
      <h1 className="title">{post.title}</h1>
      <p className='body'>{post.body}</p>
    </div>
  )
}
