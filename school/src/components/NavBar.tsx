import React from 'react'
import { navigation } from '../interfaces/interface'
import '../css/NavBar.css'

const NavBar = () => {
    
    const navigationItems: navigation[] = [
        {
            title: 'About us',
            path: '/about',
            children: [
                {
                    itemOne: 'About us',
                    itemTwo: "Director's message",
                    itemThree: 'Team',
                    itemFour: 'Careers'
                }
                
            ]
        },

        {
            title: 'School',
            path: '/school',
            children: [
                {
                    itemOne:'Creche',
                    itemTwo: 'Nursery' ,
                    itemThree: 'Primary',
                }
            ],
        },

        {
            title: 'Curriculum',
            path: '/curriculum',
            children: [
                {
                    itemOne: 'curriculum',
                    itemTwo: 'Enrichment Activity'
                }
            ]
        },

        {
            title: 'Admissions',
            path: '/admissions',
            children:[
                {
                    itemOne: 'Addmisions',
                    itemTwo: 'Apply For Admissions'
                }
            ]
        },

        {
            title: 'Virtual tour',
            path: '/tour'
        },

        {
            title: 'Gallery',
            path: '/gallery',
            children :[
                {
                    itemOne: 'Cultural Day',
                    itemTwo: 'Inter House Sport Day'
                }
            ]
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
