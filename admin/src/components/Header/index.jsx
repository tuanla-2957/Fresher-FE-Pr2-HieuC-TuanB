import React, { useState } from "react";
import { FaBell, FaHeadphones, FaSearch } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { BsGlobe } from "react-icons/bs";

import "./style.scss";

export default function Header() {
  const auth = useSelector((state) => state.auth);
  const [language, setLanguage] = useState("en");
  const { t, i18n } = useTranslation();

  if (!auth.token) {
    return null;
  }

  const handleSetLanguage = (value) => {
    if (value != language) {
      i18n.changeLanguage(value);
      setLanguage(value);
    }
  };

  return (
    <header>
      <div className='header-welcome'>
        <h2>
          {t("WELCOME")}, <span>{auth.user.lastName}</span>
        </h2>
        <p>{t("sayHi")}</p>
      </div>
      <div className='header-menu'>
        <form className='header-search'>
          <FaSearch />
          <input type='text' placeholder='Search a transaction' />
          <button type='submit'>Enter</button>
        </form>
        <FaBell />
        <FaHeadphones />
        <div className='toggle-language'>
          <BsGlobe />
          <select onChange={(e) => handleSetLanguage(e.target.value)}>
            <option value=''>
              <BsGlobe />
            </option>
            <option value='vi'>Vi</option>
            <option value='en'>En</option>
          </select>
        </div>
      </div>
    </header>
  );
}
