import React from 'react'
import {createContext,useState} from 'react';

const FavoritesContext = createContext({
    favorites: [],
    total: 0,
    addFavorite: (favoriteMeetup) => {},
    removeFavorite: (meetupId) => {},
    isFavorite: (meetupId) => {}
});


export function FavoritesContextProvider(props){
    const [userFavorites,setUserFavorites] = useState([]);

    const addFavoriteHandler = (favoriteMeetup) => {
        setUserFavorites((prevUserFavorites) => {
            return prevUserFavorites.concat(favoriteMeetup); 
        });
    }

    const removeFavoriteHandler = (meetupId) => {
        setUserFavorites((prevUserFavorites) => {
            return prevUserFavorites.filter(meetup => meetup.id !== meetupId)
        })
    }

    const itemIsFavoriteHandler = (meetupId) => {
        return userFavorites.some(meetup => meetupId === meetup.id);
    }
    
    const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
        addFavorite: addFavoriteHandler,
        removeFavorite: removeFavoriteHandler,
        isFavorite: itemIsFavoriteHandler
    };

    return <FavoritesContext.Provider value={context}>
        {props.children}
    </FavoritesContext.Provider>    
}


export default FavoritesContext;