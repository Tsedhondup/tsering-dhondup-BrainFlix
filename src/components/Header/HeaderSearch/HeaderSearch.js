import "./HeaderSearch.scss";
import SearchIcon from "../../../assets/images/search.svg";
let HeaderSearch = () => {
  return (
    <form className="header-search-and-mobile-profile-container__form">
      <img
        className="header-search-and-mobile-profile-container__form--icon"
        src={SearchIcon}
        alt="search icon"
      />
      <input
        className="header-search-and-mobile-profile-container__form--input-field"
        type="text"
        name="search"
        placeholder="search"
      />
    </form>
  );
};
export default HeaderSearch;
