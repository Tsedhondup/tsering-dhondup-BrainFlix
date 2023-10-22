// HOOK
import { useState } from "react";
// STYLE
import "./HeaderSearch.scss";
// ASSET
import SearchIcon from "../../../assets/images/search.svg";

const HeaderSearch = () => {
  const [dynamicSeachIconClass, setDynamicSeachIconClass] = useState("");
  const [dynamicSeachInputClass, setDynamicSeachInputClass] = useState("");

  // HEADER-FORM-HANDLER
  const headerFormHandler = (event) => {
    event.preventDefault();
  };
  // SEARCH-FOCUS-HANDLER
  const searchFocusHandler = () => {
    setDynamicSeachIconClass(
      "header-search-and-mobile-profile-container__form--icon-display-none"
    );
    setDynamicSeachInputClass(
      "header-search-and-mobile-profile-container__form--input-field-even-padding"
    );
  };
  // SEARCH-BLUR-HANLDER
  const searchBlurHandler = () => {
    setDynamicSeachIconClass("");
    setDynamicSeachInputClass("");
  };
  return (
    <form
      className="header-search-and-mobile-profile-container__form"
      onSubmit={(event) => {
        headerFormHandler(event);
      }}
    >
      {/* SEARCH LOGO */}
      <img
        className={`header-search-and-mobile-profile-container__form--icon ${dynamicSeachIconClass}`}
        src={SearchIcon}
        alt="search icon"
      />
      {/* SEARCH INPUT */}
      <input
        className={`header-search-and-mobile-profile-container__form--input-field ${dynamicSeachInputClass}`}
        type="text"
        name="search"
        placeholder="search"
        onFocus={() => {
          searchFocusHandler();
        }}
        onBlur={() => {
          searchBlurHandler();
        }}
      />
    </form>
  );
};
export default HeaderSearch;
