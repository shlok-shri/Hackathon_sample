import React from 'react'
import appwriteService from '../appwrite/config'
import { Link } from 'react-router-dom'

function PostCard({$id, title, featuredImage}) {

  return (
    <Link to={`/post/${$id}`}>
        <div className='flex flex-col'>
            <div>
                <img src={appwriteService.getFilePreview(featuredImage)} alt={title} srcset="" />
            </div>
            <div>
                {title}
            </div>
        </div>      
    </Link>
  )
}

export default PostCard
