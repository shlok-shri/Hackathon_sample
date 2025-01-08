import React from 'react'
import appwriteService from '../appwrite/config'
import { Link } from 'react-router-dom'

function PostCard({$id, title, featuredImage}) {

  return (
    <Link to={`/post/${$id}`}>
        <div className='flex flex-col hover:translate-x-1 hover:-translate-y-1 p-4 rounded-lg hover:bg-card-hover bg-card-background duration-300'>
            <div>
                <img src={appwriteService.getFilePreview(featuredImage)} alt={title} srcset="" className='w-[250px] h-[150px] rounded-lg'/>
            </div>
            <div className='text-card-text'>
                {title}
            </div>
        </div>      
    </Link>
  )
}

export default PostCard
