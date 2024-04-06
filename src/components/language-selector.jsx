import React, { useState, useEffect } from 'react';
import { Select } from "@mantine/core";
import { useTranslation } from 'react-i18next';

export default function LanguageSelector() {
  const [value, setValue] = useState(() => {
    const storedLanguage = localStorage.getItem('selectedLanguage');
    return storedLanguage ? storedLanguage : "en";
  });

  const { i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(value);
    localStorage.setItem('selectedLanguage', value);
    document.body.dir = i18n.dir()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, i18n, i18n.language]); // Trigger effect whenever value changes

  return (
    <div className="relative w-[100px]">
      <img
        width={50}
        height={20}
        src={value === "en" ? "/english.png" : "/sa-flag.gif"}
        alt=""
        className="absolute h-5 top-2 left-2 z-30"
      />
      <Select
        data={[
          { value: "en", label: "English" },
          { value: "ar", label: "Arabic" },
        ]}
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
      />
    </div>
  );
}
