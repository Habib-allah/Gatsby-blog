import React from 'react'
import Link from 'gatsby-link'

const Menu=()=> {
    return (
        <div style={{
            paddingTop:'10px',
        }}>
            <ul style={{
                listStyle:'none',
                display:'flex',
                justifyContent:'space-evenly'
            }}>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li> 
                    <Link to='/services'>Services</Link></li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
            </ul>
        </div>
    )
}

export default Menu