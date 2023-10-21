// STYLE
import "./HeaderSearch.scss";
// ASSET
import SearchIcon from "../../../assets/images/search.svg";

const HeaderSearch = () => {
  // FORM HANDLER
  const formHandler = (event) => {
    event.preventDefault();
  };
  return (
    <form
      className="header-search-and-mobile-profile-container__form"
      onSubmit={(event) => {
        formHandler(event);
      }}
    >
      {/* SEARCH LOGO */}
      <img
        className="header-search-and-mobile-profile-container__form--icon"
        src={SearchIcon}
        alt="search icon"
      />
      {/* SEARCH INPUT */}
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
