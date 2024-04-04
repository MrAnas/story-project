import React from 'react'
import {LinkedInIcon, YoutubeIcon, InstagramIcon} from './img'
// import YoutubeIcon from './img/youtubeIcon'
// import InstagramIcon from './img/instagramIcon'





export default function FooterNew() {
  return (
    <div className='bg-[#E9E9E9] py-16'>
        <div className='container flex items-center justify-between mx-auto px-4'>
            <div className='flex items-center gap-8'>
                <div>Select</div>
                <img  src='/story-logo.png' alt='' />
            </div>
            <div className='flex gap-4 items-center'>
                <LinkedInIcon/>
                <YoutubeIcon/>
                <InstagramIcon/>
            </div>

        </div>
    </div>
  )
}
