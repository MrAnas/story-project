import React from "react";
import { useTranslation } from "react-i18next";


const Features  = () => {
  const {t} = useTranslation()
  const {title1, text1, title2, text2, title3, text3} = t( "featuresItems","featuresHeading", "featuresItems")
  const AboutItems = [
    {
      id: 1,
      img: '/unique.png',
      title: title1,
      text: text1
    },
    {
      id: 2,
      img: '/saves.png',
      title: title2,
      text: text2,
    },
    {
      id: 3,
      img: '/adds.png',
      title: title3,
      text: text3,
    },
  ]
  return (
    <div className='bg-[#4B5FFF]'>
      <div className="container flex flex-col gap-12 mx-auto py-12 lg:py-24  px-2 sm:px-4 md:px-8">
        <h2 className="font-bold text-white   text-3xl lg:text-5xl py-4">
         {t("featuresHeading")}
        </h2>
      <ul className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
        {AboutItems.map((about) => (
          <li className="bg-[#ffffff] flex flex-col gap-8 rounded-2xl border border-[#D0D5DD]  p-3 lg:p-6">
            <img src={about.img} alt="img"/>
            <div className="flex flex-col gap-4">
            <h4 className="text-start text-[#0E1125] font-semibold text-lg">{about.title}</h4>
            <p className="text-start text-base text-[#525356] font-normal">{about.text}</p>

            </div>
          </li>
        ))

        }
      </ul>

      </div>
    </div>
  );
}
export default Features;