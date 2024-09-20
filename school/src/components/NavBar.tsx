import { navigation } from '../interfaces/interface'
import '../css/NavBar.scss'
import { useState } from 'react'
import {cloneDeep} from 'lodash'
import { Link } from "react-router-dom"
import React from "react";



const NavBar = () => {
    const navigationItems: navigation[] = [
        {
            title: 'About Us',
            path: '/about',
            isVisible: false,
            children: [
                {
                    title: 'About Us',
                    path:'/about'
                },

                {
                    title: 'Directors Message',
                    path:'/directors-message'
                },

          //    {
          //        title: 'Team',
          //        path:'/team'
          //    },

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
          //      {
         //          title:'Creche',
         //          path:'/creche'
          //      },

                {
                    title:'Nursery - Primary',
                    path:'/nursery-primary'
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
            path: '/admission',
            isVisible: false,
            children:[
                {
                    title:'Admission',
                    path:'/admission'
                },

                {
                    title:'Apply For Admission',
                    path:'/apply-for-admission'
                }
            ]
        },
//
 //       {
 //           title: 'Virtual tour',
  //          path:'/tour',
 //           isVisible: false,
 //           children:[
  //              {   title:' Virtual Tour',
  //                  path:'/tour'
  //              }
   //         ]
   //     },

        {
            title: 'Gallery',
            path: '/gallery',
            isVisible: false,
            children :[
                {
                    title:'Honey Rock Gallery',
                    path: '/gallery'
                },

             //   {
            //        title:'Inter house Sport Day',
           //         path:'/interhousesportday'
             //   }
            ]
        },

        {
            title: 'Contact',
            path: '/contact',
            isVisible: false,
            children:[
                {
                    title: 'Contact Us',
                    path:'/contact-us'
                },

                {
                    title: 'Parents Feedback',
                    path:'/parent-feedback'
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
               

                <ul className='navigation-list'>
                    {
                        navItems.map((item, index) => {
                            function Toggle(index:number):void{

                                let clonedArray = cloneDeep(navItems);
                                clonedArray = clonedArray.map((arrayItem, itemIndex) => {
                                    if (itemIndex !== index) {
                                        arrayItem.isVisible = false
                                    } else {
                                        arrayItem.isVisible = !arrayItem.isVisible
                                    }

                                    return arrayItem
                                })

                                // clonedArray[index].isVisible = !clonedArray[index].isVisible
                                             
                                            setNavItems(clonedArray)

                                  //   item.isVisible = true



                                 console.log(navigationItems)
                                console.log()
                            }
                            return <li key={index}
                                       onClick={(event)=>Toggle(index)}
                                    //   onMouseOver={(event)=>Toggle(index)}
                                       className={'main-list-items'}>
                                <p>
                                    {item.title}
                                </p>

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
