import { useState } from "react";
import "../components/style.css";

const SearchMain = () => {
  const [searchItem, setSearchItem] = useState("");

  return (
    <div className="wrap">
      <div className="search">
        <input
          type="search"
          placeholder="type city name.."
          id="search"
          value={searchItem}
          onChange={(e) => setSearchItem(e.target.value)}
        />
      </div>

      <button className="searchButton">search </button>
    </div>
  );
};

export default SearchMain;
