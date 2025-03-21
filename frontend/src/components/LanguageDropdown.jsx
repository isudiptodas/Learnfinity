import React, {useState} from 'react'
import { useTheme } from '../context/ThemeContext';
import { languageVersions } from '../languageTemplate';

function LanguageDropdown({onSelectLanguage}) {

  const { dark } = useTheme();
  const[selectedLanguage, setSelectedLanguage]= useState('Select a langauge : ');

  const handleSelect = (language)=>{
      setSelectedLanguage(language.language);
      if (onSelectLanguage) {
        onSelectLanguage(language.language); 
      }
  }
  return (
    <>
      <div className="dropdown dropdown-hover bg-purple-500">
        <div tabIndex={0} role="button" className={`btn ${dark ? "bg-black text-white":"bg-white hover:bg-gray-300 text-black"} capitalize`}>{selectedLanguage}</div>
        <ul tabIndex={0} className={`dropdown-content menu ${dark ? 'bg-black text-white' : 'bg-white text-black'} rounded-box z-[1] w-52 p-2 shadow`}>
          {languageVersions.map((language, index) => (
            <li key={index} className='capitalize'>
              <a onClick={() => handleSelect(language)}>{language.language}</a>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default LanguageDropdown
