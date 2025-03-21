import React from "react";
import { languageVersions } from "../languageTemplate"; // Import data

function ChooseLanguage({ onSelectLanguage, selectedLang }) {
  const handleLanguageSelect = (language) => {
    onSelectLanguage(language); // Use the onSelectLanguage prop to update the selected language in the parent component
  };

  return (
    <div className="dropdown dropdown-hover">
      <div
        tabIndex={0}
        role="button"
        className="btn m-1 bg-white hover:bg-gray-300 text-black capitalize"
      >
        {selectedLang ? selectedLang.language : "Select a language"} {/* Show the selected language */}
      </div>
      <ul className="dropdown-content menu bg-white text-black rounded-box z-[1] w-52 p-2 shadow">
        {languageVersions.map((language, index) => (
          <li key={index} className="capitalize">
            <a onClick={() => handleLanguageSelect(language)}>
              {language.language}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ChooseLanguage;
