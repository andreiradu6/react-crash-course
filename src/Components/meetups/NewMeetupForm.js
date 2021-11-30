import React from 'react';
import classes from './NewMeetupForm.module.css';
import Card from '../ui/Card';
import {useRef} from 'react';

function NewMeetupForm(props) {
    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const addressInputRef = useRef();
    const descriptionInputRef = useRef();

    const submitHandler = (e) => {
        e.preventDefault();
        const enteredTitle = titleInputRef.current.value;
        const enteredImage = imageInputRef.current.value;
        const eneteredAdress = addressInputRef.current.value;
        const enteredDescription = descriptionInputRef.current.value;  


        const meetupData = {
            title: enteredTitle,
            image: enteredImage,
            address: eneteredAdress,
            description: enteredDescription
        }

        console.log(meetupData);

        props.onAddMeetUp(meetupData);


        
        // titleInputRef.current.value = "";
        // imageInputRef.current.value = "";
        // addressInputRef.current.value = "";
        // descriptionInputRef.current.value = "";
    };

    return (
        <Card>
            <form className={classes.form} onSubmit={submitHandler}>
                <div className={classes.control}>
                    <label htmlFor="title">Meetup Title</label>
                    <input type="text" required id="title" ref={titleInputRef}></input>
                </div>
                <div className={classes.control}>
                    <label htmlFor="image">Meetup Image</label>
                    <input type="url" required id="image" ref={imageInputRef}></input>
                </div>
                <div className={classes.control}>
                    <label htmlFor="address">Meetup Address</label>
                    <input type="text" required id="address" ref={addressInputRef}></input>
                </div>
                <div className={classes.control}>
                    <label htmlFor="description">Meetup Description</label>
                    <textarea type="text" required id="description" rows="5" ref={descriptionInputRef}></textarea>
                </div>
                <div className={classes.actions}>
                    <button>Add Meetup</button>
                </div>
            </form>
        </Card>
    )
}

export default NewMeetupForm
