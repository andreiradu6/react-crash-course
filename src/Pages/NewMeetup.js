import React from 'react'
import NewMeetupForm from '../Components/meetups/NewMeetupForm'
import { useNavigate } from 'react-router-dom';


function NewMeetup() {
    const navigate = useNavigate();
    const addMeetupHandler = async (meetupData) => {
        const url = "https://react-started-223ab-default-rtdb.europe-west1.firebasedatabase.app/meetups.json";
        try{
            const response = await fetch (url, {
                method: 'POST',
                body: JSON.stringify(meetupData),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const data = await response.json();
            if(data){
                setTimeout(() => {
                    navigate('/');
                }, 1500);
            }
        }
        catch(err){
            console.log(err);
        }
        
    };


    return (
        <section>
           <h1> Add New Meetup </h1>
           <NewMeetupForm onAddMeetUp={addMeetupHandler}/>
        </section>
    )
}

export default NewMeetup
