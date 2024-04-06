import React from "react";
import { LinkedInIcon, YoutubeIcon, InstagramIcon } from "./img";
import LanguageSelector from "./language-selector";
import { useTranslation } from "react-i18next";



export default function FooterNew() {
  const {t} = useTranslation()

  return (
    <div className="bg-[#E9E9E9] py-8 md:pt-16 pb-4 flex flex-col gap-12">
      <div className="container flex  flex-col-reverse gap-y-8  items-center justify-center  sm:flex-row sm:justify-between mx-auto px-4">
        <div className="flex items-center  gap-8">
         <LanguageSelector />
          <img src="/story-logo.png" alt="" />
        </div>
        <div className="flex gap-4 items-center ">
          <LinkedInIcon />
          <YoutubeIcon />
          <InstagramIcon />
        </div>
      </div>
      <div className="flex gap-2 flex-wrap justify-center items-center ">
        <p>{t("footer1")}</p>
        <p>{t("footer2")}</p>
      </div>
    </div>
  );
}
