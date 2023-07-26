
import { navigation } from '../interfaces/interface'
import '../css/NavBar.css'


const NavBar = () => {
    
    const navigationItems: navigation[] = [
        {
            title: 'About us',
            path: '/about',
            children: [
                {
                    title: 'About Us',
                    path:'/aboutus'
                },

                {
                    title: 'Directors Message',
                    path:'/directorsmessage'
                },

                {
                    title: 'Team',
                    path:'/team'
                },

                {
                    title: 'Career',
                    path:'/career'
                }
                
            ]
        },

        {
            title: 'School',
            path: '/school',
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
            children: [
                {
                    title: 'Curiculum',
                    path: '/curriculum'
                }
            ]
        },

        {
            title: 'Admissions',
            path: '/admissions',
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
            children:[
                {   title:' Virtual Tour',
                    path:'/tour'
                }
            ]
        },

        {
            title: 'Gallery',
            path: '/gallery',
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
            children:[
                {
                    title: 'Contact Us',
                    path:',contactus'
                },

                {
                    title: 'Parents Feedback',
                    path:'/parentfeedback'
                }
            ]
        },
    ]

    console.log(navigationItems)
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

              <ul className='dropdown-items'>
                    {
                        navigationItems.map((data, dataIndex)=> {
                            return <div 
                                    key={dataIndex}>
                                {data.children?.map((dropdownItem, dropdownIndex) => {
                                    return <li key={dropdownIndex}>
                                        {dropdownItem.title}
                                    </li>
                                })}
                            </div>
                        })
                    }
              </ul>
                

            

            </div>
        </div>
    </nav>
  )
}

export default NavBar
