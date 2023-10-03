import "./HeaderSearch.scss";
import Search from "../../assets/images/search.svg";
let HeaderSearch = () => {
  return (
    <form>
      <img className="search-icon" src={Search} alt="search icon" />
      <input type="text" name="search" placeholder="search" />
    </form>
  );
};
export default HeaderSearch;
