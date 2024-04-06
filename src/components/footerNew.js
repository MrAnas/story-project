import React, {useState} from "react";
import { LinkedInIcon, YoutubeIcon, InstagramIcon } from "./img";
import { Select } from '@mantine/core';
// import YoutubeIcon from './img/youtubeIcon'
// import InstagramIcon from './img/instagramIcon'

export default function FooterNew() {
  const [value, setValue] = useState(null);
  return (
    <div className="bg-[#E9E9E9] py-8 md:pt-16 pb-4 flex flex-col gap-12">
      <div className="container flex  flex-col-reverse gap-y-8  items-center justify-center  sm:flex-row sm:justify-between mx-auto px-4">
        <div className="flex items-center  gap-8">
          <div className="relative w-[100px]">
          <img width={50} height={20} src={value === "1" ? '/english.png' : '/sa-flag.gif'} alt="" className="absolute h-5 top-2 left-2 z-30"/>
          <Select data={[{ value: '1', label: '1' }, {value: '2', label: '2'}]} value={value}  onChange={setValue}  />
          </div>
          <img src="/story-logo.png" alt="" />
        </div>
        <div className="flex gap-4 items-center ">
          <LinkedInIcon />
          <YoutubeIcon />
          <InstagramIcon />
        </div>
      </div>
      <div className="flex gap-2 flex-wrap justify-center items-center ">
        <p>©2024 Story.inc</p>
        <p>Powered by Story.inc</p>
      </div>
    </div>
  );
}
