import React,{useState} from 'react';
import {Link} from 'react-router-dom'
import {Avatar} from 'antd'
const navlinks = [
    {
        title:'Home',
        path:'/'
    },
    {
        title: 'Blog',
        path: '/blog'
    },
    {
        title: 'Contact Us',
        path: '/contact-us'
    },
    {
        title: 'Search',
        path: '/login'
    }
]

export default function Navigation ({user}) {
    const [menuActive, setMenuActive] = useState(false)
    
    return(
    <nav className="site-navigation" role="navigation">
        <span className="menu-title">MistrySeries</span>
        <div className={`menu-content-container ${menuActive && 'active'}`}>
            <ul>
                { navlinks.map((link, index) => (
                    <li key={index}>
                        <Link to={link.path}>{link.title}</Link>
                    </li>
                ))}
            </ul>
            <span className="menu-avatar-container">
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" size={38} />
                <span className='menu-avatar-name'>{`${user.firstName} ${user.lastName}`}</span>
            </span>
        </div>
        <i className="ionicons icon ion-ios-menu" onClick={() => setMenuActive(!menuActive)} />

    </nav>
    )
}