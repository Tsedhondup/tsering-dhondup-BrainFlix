import "./HeaderSearch.scss";
import Search from "../../../assets/images/search.svg";
let HeaderSearch = () => {
  return (
    <form className="header-search-form">
      <img
        className="header-search-form__icon"
        src={Search}
        alt="search icon"
      />
      <input
        className="header-search-form__input"
        type="text"
        name="search"
        placeholder="search"
      />
    </form>
  );
};
export default HeaderSearch;
