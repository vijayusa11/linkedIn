import React, { useEffect, useState } from 'react'
import './Feed.css'
import CreateIcon from '@material-ui/icons/Create';
import InputOption from './InputOption';
import ImageIcon from '@material-ui/icons/Image';
import YouTubeIcon from '@material-ui/icons/YouTube';
import EventNoteIcon from '@material-ui/icons/EventNote';
import AssignmentIcon from '@material-ui/icons/Assignment';
import Post from './Post';
import { db } from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move'

function Feed() {
    const [posts, setPosts] = useState([])
    const [input, setInput] = useState([])
    useEffect(() =>{
        db.collection('posts').orderBy('timeStamp', 'desc').onSnapshot(snapshot => {
            setPosts(snapshot.docs.map((doc) => (
                {
                    id: doc.id,
                    data: doc.data(),
                }
            )))
        });
    }, [])
    const send = (e) => {
        e.preventDefault();
        db.collection('posts').add({
            name: 'PAPA',
            description: 'this is linkedIn clone',
            message: input,
            photoUrl: '',
            timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
        })
        setInput('');
    }
    
    
    return (
        <div className='feed'>
            <div className='feed__inputContainer'>
                <div className='feed__input'>
                    <CreateIcon />
                    <form>
                        <input type='text' value={input} onChange={e => setInput(e.target.value)} />
                        <button onClick={send} type='submit'>Send</button>
                    </form>
                </div>
                <div className='feed__inputOpions'> 
                    <InputOption Icon={ImageIcon} title='Photo' color='#70B5F9'/>
                    <InputOption Icon={YouTubeIcon} title='Video' color='lightgreen'/>
                    <InputOption Icon={EventNoteIcon} title='Event' color='#C0CBCD'/>
                    <InputOption Icon={AssignmentIcon} title='Article' color='orange'/>
                </div>
            </div>
            <FlipMove>
                {posts.map(({id, data : { name, description, message, photoUrl }}) => (
                    <Post 
                    key={id} 
                    name={name}
                    description={description}
                    message={message}
                    photoUrl={photoUrl}
                    />
                ))}
            </FlipMove>
            
        </div>
    )
}

export default Feed
