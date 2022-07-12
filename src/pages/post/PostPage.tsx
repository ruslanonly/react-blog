import React, { useState } from 'react'
import { useParams } from 'react-router'
import Post from './Post';
import Loader from '../../components/Loader/Loader';

export default function PostPage() {
  const params = useParams();
  const [postLoaded, setPostLoaded] = useState<boolean>(false);

  
  return (
    <div className='page post'>
      <div className="container">
        {!postLoaded ? <Loader/> : null}
        <Post id={params.id} onLoaded={() => {setPostLoaded(true)}}/>
      </div>      
    </div>
  )
}
