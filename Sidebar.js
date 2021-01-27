import { Avatar } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import './Sidebar.css'

function Sidebar() {
    const user = useSelector(selectUser)
    const recentItem = (topic) => (
        <div className='sidebar__recentItem'>
            <span className='sidebar__hash'>#</span>
            <p>{topic}</p>
        </div>
    );

    return (
        <div className='sidebar'>
            <div className='sidebar__top'>
                <img src='https://media-exp1.licdn.com/dms/image/C5116AQEaCAbEzvxBMA/profile-displaybackgroundimage-shrink_200_800/0/1586520754877?e=1616630400&v=beta&t=8AAKTaNrT-VpNOdffwMXS9BAt_ZbKWXQMlpSNYQ65Ng' alt='' />
                <Avatar src='https://scontent.fjai5-1.fna.fbcdn.net/v/t1.0-9/20264920_1264442717017180_2140474373907077802_n.jpg?_nc_cat=105&ccb=2&_nc_sid=09cbfe&_nc_ohc=Bm0JZf_XDDoAX_39pqP&_nc_ht=scontent.fjai5-1.fna&oh=b9b4e2d0d7b68bb17e02a8ef6c04d799&oe=60342461' className='sidebar__avatar' />
                <h2>Vijay Choudhary</h2>
                <h4>Hello guys how are you!!!</h4>
            </div>

            <div className='sidebar__stats'>
                <div className='sidebar__stat'>
                    <p>Who viewed your profile</p>
                    <p className='sidebar__statNumber'>137</p>
                </div>
                <div className='sidebar__stat'>
                    <p>Views of your posts</p>
                    <p className='sidebar__statNumber'>554</p>
                </div>
            </div>

            <div className='sidebar__bottom'>
                <p>Recent</p>
                {recentItem('Reactjs')}
                {recentItem('Django')}
                {recentItem('Python')}
                {recentItem('Javascript')}
                {recentItem('Database')}
            </div>

        </div>
    )
}

export default Sidebar
