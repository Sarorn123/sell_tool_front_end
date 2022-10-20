import { BsSearch } from "react-icons/bs";

export const Searchbox = () => {
  return (
    <div className="search-box">
      <input type="text" placeholder="Search products" />
      <button className="search-icon">
        <span>Search</span>
        <span>
          <BsSearch />
        </span>
      </button>
    </div>
  );
};
