
import React from 'react'
import {Link} from 'react-router-dom'
import {useContext} from 'react';
import FavoritesContext from '../../store/favorite-context';
import './Navbar.css'

function Navbar() {
    const favoriteCtx = useContext(FavoritesContext);
    
    return (
        <header className="header">
            <div className="logo">MeetUPS</div>
            <nav>
                <ul>
                    <li>
                        <Link to='/'> All Meetups</Link>
                    </li>
                    <li>
                        <Link to='/new-meetup'> New Meetup </Link>
                    </li>
                    <li>
                        <Link to='/favorites'> 
                            My Favorites
                            <span className="badge">
                                {favoriteCtx.totalFavorites}
                            </span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default Navbar
