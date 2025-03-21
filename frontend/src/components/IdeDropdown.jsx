import React, {useState} from 'react'
import { useTheme } from '../context/ThemeContext';
import { languageVersions } from '../languageTemplate';

function IdeDropdown({onSelectLanguage}) {

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
      <div className="dropdown dropdown-hover rounded-md">
        <div tabIndex={0} role="button" className={`btn rounded-md ${dark ? "bg-white hover:bg-gray-300 text-black":"bg-black hover:bg-zinc-800 text-white"} capitalize border-0 shadow-lg`}>{selectedLanguage}</div>
        <ul tabIndex={0} className={`dropdown-content menu ${dark ? 'bg-white text-black' : 'bg-black text-white'} rounded-box z-[1] w-52 p-2`}>
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

export default IdeDropdown
