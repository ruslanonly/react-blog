import React, {useState, useEffect} from 'react'

import { IPost } from "../../types";

type PostProps = {
  id: number | string | undefined,
  onLoaded: () => void
}

export default function Post(props: PostProps) {
  const [post, setPost] = useState<IPost | null>({} as IPost | null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${props.id}`)
    .then(response => {
      if (!response.ok) {
        setPost(null);
        return Promise.reject("ERROR " + response.status);
      }
      return response.json();
    })
    .catch((err) => {
      console.log("JsonPlaceHolder error ", err);
      setPost(null)
    })
    .then(json => {
      setTimeout(() => {
        props.onLoaded();
        setPost(json);
      }, 100)
    });
    
  }, []);

  if (post != null) {
    return (
      <div className='post'>
        <h1 className="title">{post.title}</h1>
        <p className='body'>{post.body}</p>
      </div>
    )
  } else {
    return <h1>Wront post id</h1>
  }
}
