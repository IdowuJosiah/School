import React from 'react'
import { navigation } from '../interfaces/interface'
import '../css/NavBar.css'

const NavBar = () => {
    
    const navigationItems: navigation[] = [
        {
            title: 'About us',
            path: '/about',
        },

        {
            title: 'School',
            path: '/school',
            children: {
                itemOne: 'secondary',
                itemTwo: 'nursery'
            },
        },

        {
            title: 'Curriculum',
            path: '/curriculum'
        },

        {
            title: 'Admissions',
            path: '/admissions'
        },

        {
            title: 'Virtual tour',
            path: '/tour'
        },

        {
            title: 'Gallery',
            path: '/gallery'
        },

        {
            title: 'Contact',
            path: '/contact'
        },
    ]
  return (
    <nav className='navigation-bar'>
        <div className="page-width">
            <div className="navigation-content">
                <div className='navigation-emblem'>
                   
                    <header className='navigation-title'>BALABLU</header>
                </div>

                <ul className='navigation-list'>
                    {
                        navigationItems.map((item, index) => {
                            return <li key={index}>
                                {item.title}
                            </li>
                        })
                    }
                </ul>

            </div>
        </div>
    </nav>
  )
}

export default NavBar
