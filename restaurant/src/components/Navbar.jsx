import React from 'react'
import Button from './ui/Button'

const Navbar = () => {
    return (
        <nav>
            <div className="navbar p-1 md:px-0">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                                <path d="M22 13.5H2C1.448 13.5 1 13.052 1 12.5C1 11.948 1.448 11.5 2 11.5H22C22.552 11.5 23 11.948 23 12.5C23 13.052 22.552 13.5 22 13.5ZM23 5.5C23 4.948 22.552 4.5 22 4.5H2C1.448 4.5 1 4.948 1 5.5C1 6.052 1.448 6.5 2 6.5H22C22.552 6.5 23 6.052 23 5.5ZM23 19.5C23 18.948 22.552 18.5 22 18.5H2C1.448 18.5 1 18.948 1 19.5C1 20.052 1.448 20.5 2 20.5H22C22.552 20.5 23 20.052 23 19.5Z" fill="white" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow font-medium">
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
                    <ul className="menu menu-horizontal px-1 text-white font-medium">
                        {
                            navLinks.map((link, index) => (
                                <li key={index}><a href={link.name}>{link.name}</a></li>
                            ))
                        }
                    </ul>
                </div>
                <div className="navbar-end hidden md:flex">
                    <Button title={"Book a table"} />
                </div>
            </div>
        </nav>
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
