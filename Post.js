import { Avatar } from '@material-ui/core'
import React, { useState, forwardRef } from 'react'
import InputOption from './InputOption'
import './Post.css'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import ShareIcon from '@material-ui/icons/Share';
import SendIcon from '@material-ui/icons/Send';

const Post = forwardRef(({ name, description, message, photoUrl }, ref) => {
    return (
        <div ref={ref} className='post'>
            <div className='post__header'>
                <Avatar />
                <div className='post__info'>
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </div>
            <div className='post__body'>
                <p>{message}</p>
            </div>
            <div className='post__buttons'>
                <InputOption Icon={ThumbUpAltIcon} title='Like' color='gray' />
                <InputOption Icon={ChatBubbleOutlineIcon} title='Comment' color='gray' />
                <InputOption Icon={ShareIcon} title='Share' color='gray' />
                <InputOption Icon={SendIcon} title='Send' color='gray' />
            </div>
        </div>
    )
})

export default Post
