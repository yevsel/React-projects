import React from 'react'
import {FaTwitter,FaFacebook,FaLinkedin,FaBehance} from 'react-icons/fa'


export const links =[
    {
        id:1,
        url:'/',
        text:'Home'
    },
    {
        id:2,
        url:'/about',
        text:'About'
    },
    {
        id:3,
        url:'/projects',
        text:'Projects'
    },
    {
        id:4,
        url:'/contacts',
        text:'Contacts'
    }
]

export const socials =[
    {
        id:1,
        url:'https://www.twitter.com',
        icon:<FaTwitter/>
    },
    {
        id:2,
        url:'https://www.facebook.com',
        icon:<FaFacebook/>
    },
    {
        id:3,
        url:'https://www.behance.com',
        icon:<FaBehance/>
    },
    {
        id:4,
        url:'https://www.linkedin.com',
        icon:<FaLinkedin/>
    }
]

