import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth'
import {logout} from '../../store/authSlice'

function LogoutBtn() {

    const dispatch = useDispatch()
    const logoutHandeler = () => {
        authService.logout()
            .then(() => {
                dispatch(logout()) //Taaki store mein value updated rahe
            })    
    }
  return (
    <div>
        <button 
            className='text-black bg-white border border-black px-4 py-2 rounded-md'
            onClick={logoutHandeler}
        >
            LogOut
        </button>
    </div>
  )
}

export default LogoutBtn
