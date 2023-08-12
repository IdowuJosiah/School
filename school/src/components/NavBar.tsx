import { navigation } from '../interfaces/interface'
import '../css/NavBar.css'
import { useState } from 'react'
import {cloneDeep} from 'lodash'
import { Link } from "react-router-dom"
import React from "react";



const NavBar = () => {
    const navigationItems: navigation[] = [
        {
            title: 'About us',
            path: '/about',
            isVisible: false,
            children: [
                {
                    title: 'About Us',
                    path:'/about'
                },

                {
                    title: 'Directors Message',
                    path:'/directorsmessage'
                },

                {
                    title: 'Team',
                    path:'/team'
                },

              //  {
             //       title: 'Career',
              //      path:'/career'
            //    }
                
            ]
        },

        {
            title: 'School',
            path: '/school',
            isVisible: false,
            children: [
                {
                   title:'Creche',
                   path:'/creche'
                },

                {
                    title:'Nursery',
                    path:'/nursery'
                 }
            
            ],
        },

        {
            title: 'Curriculum',
            path: '/curriculum',
            isVisible: false,
            children: [
                {
                    title: 'Curriculum',
                    path: '/curriculum'
                }
            ]
        },

        {
            title: 'Admissions',
            path: '/admissions',
            isVisible: false,
            children:[
                {
                    title:'Admission',
                    path:'/Admission'
                },

                {
                    title:'Apply For Admission',
                    path:'/Applyforadmission'
                }
            ]
        },

        {
            title: 'Virtual tour',
            path:'/tour',
            isVisible: false,
            children:[
                {   title:' Virtual Tour',
                    path:'/tour'
                }
            ]
        },

        {
            title: 'Gallery',
            path: '/gallery',
            isVisible: false,
            children :[
                {
                    title:'Cultural Day',
                    path: '/culturalday'
                },

                {
                    title:'Inter house Sport Day',
                    path:'/interhousesportday'
                }
            ]
        },

        {
            title: 'Contact',
            path: '/contact',
            isVisible: false,
            children:[
                {
                    title: 'Contact Us',
                    path:'/contactus'
                },

                {
                    title: 'Parents Feedback',
                    path:'/parentfeedback'
                }
            ]
        },
    ]
    const [navItems, setNavItems] = useState <navigation[]> (navigationItems)




    console.log(navigationItems)
  return (


    <nav className='navigation-bar'>
        <div className="page-width">
            <div className="navigation-content">
                <div className='navigation-emblem'>
                   
                    <header className='navigation-title'><Link to="/"><img alt="logo" src="./School logo.JPG"/></Link></header>
                </div>

                <ul className='navigation-list'>
                    {
                        navItems.map((item, index) => {
                            function Toggle(index:number):void{

                                let clonedArray = cloneDeep(navItems)

                                clonedArray[index].isVisible = !clonedArray[index].isVisible
                                            setNavItems(clonedArray)
                                  //   item.isVisible = true



                                 console.log(navigationItems)
                                console.log()
                            }
                            return <li key={index}
                                       onClick={(event)=>Toggle(index)}
                                       className={'main-list-items'}>
                                {item.title}

                                {
                                    <ul 
                                    className={`dropdown-items ${item.isVisible ? 'active' : ''} `}
                                    >
                                          {
                                              item.children?.map((data, dataIndex)=> {
                                                  return <li key={dataIndex}>
                                                      <Link to={data.path}>{data.title}</Link>
                                              </li>
                                              })
                                          }
                                    </ul>
                                }
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
