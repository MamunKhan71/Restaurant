import React from 'react'

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {
                            navLinks.map((link, index) => (
                                <li key={index}><a href={link.name}>{link.name}</a></li>
                            ))
                        }
                    </ul>
                </div>
                <div className='flex items-center gap-2'>
                    <img src="Frame.png" alt="Frame" />
                    <img src="Restaurant.png" alt="Restaurant" />
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-white">
                    {
                        navLinks.map((link, index) => (
                            <li key={index}><a href={link.name}>{link.name}</a></li>
                        ))
                    }
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Button</a>
            </div>
        </div>
    )
}

export default Navbar

const navLinks = [
    {
        "name": "Home",
        "link": "/home"
    },
    {
        "name": "About",
        "link": "/about"
    },
    {
        "name": "Portfolio",
        "link": "/portfolio"
    },
    {
        "name": "Clients",
        "link": "/clients"
    },
    {
        "name": "Blog",
        "link": "/blog"
    },
    {
        "name": "Contact",
        "link": "/contact"
    }
]
