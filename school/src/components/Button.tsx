import React from 'react'
import '../css/Button.scss'
import { BiSun} from "react-icons/bi";

const Button = () => {
  return (
    <button
    type='submit'
    className='button'
    >
        Register
        <BiSun/>
    </button>
  )
}

export default Button
