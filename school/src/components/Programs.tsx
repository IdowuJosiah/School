import React from 'react'
import '../css/Programs.scss'
import { RxCaretRight } from "react-icons/rx";

const Programs = () => {
  return (
    <div className='programme-section page-width'>
      <header className="programme-section-header">Available Programmes</header>
      <div className="programmes">
        <div className="program nursery">
            <header className='program-header '>Nursery</header>
            <p className='program-description'>Lorem ipsum dolor sit amet consectetur. A lobortis non erat massa pharetra nulla. 
                Egestas non mollis eleifend tellus sit sed ultricies ut tristique. Nam donec sit tempus facilisis et. 
                Sem nunc risus quis semper id nec. Sit adipiscing volutpat enim turpis.
            </p>
            <a href='/' className='enroll-link'>
                <button  className='enroll-button'>Enroll Now <RxCaretRight className='caret'/> </button>
            </a>
        </div>

        <div className="program">
            <header className='program-header'>Primary</header>
            <p  className='program-description'>Lorem ipsum dolor sit amet consectetur. A lobortis non erat massa pharetra nulla. 
                Egestas non mollis eleifend tellus sit sed ultricies ut tristique. Nam donec sit tempus facilisis et. 
                Sem nunc risus quis semper id nec. Sit adipiscing volutpat enim turpis.
            </p>
            <a href='/' className='enroll-link'>
                <button  className='enroll-button'>Enroll Now <RxCaretRight className='caret'/> </button>
            </a>
        </div>
      </div>
    </div>
  )
}

export default Programs
