import React from 'react'
import {useContext} from 'react';
import FavoritesContext from '../store/favorite-context';
import MeetupList from '../Components/meetups/MeetupList';

function Favorites() {

    const favoritesCtx = useContext(FavoritesContext);

    let content;

    if(favoritesCtx.totalFavorites === 0){
        content = <p>You got no favorites yet. Start adding some?</p>
    } else {
        content = <MeetupList meetups={favoritesCtx.favorites}/>
    }

    return (
        <section>
            <h1>
            My Favorites Meetups
            </h1>
            {content}
        </section>
    )
}

export default Favorites