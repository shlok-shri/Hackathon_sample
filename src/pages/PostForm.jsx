import React from 'react'
import { PostForm, Container } from '../components'

function PostForm() {
  return (
    <div className='py-8'>
        <Children>
            <PostForm />
        </Children>
    </div>
  )
}

export default PostForm
