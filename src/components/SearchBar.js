import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const SearchBar = (props) => {
  const { onSearch } = props;

  const [searchText, setSearchText] = useState("");

  const history = useHistory();

  const handleInput = (e) => {
    const text = e.target.value;
    setSearchText(text);
  };

  const handleEnterKeyPressed = (e) => {
    if (searchText !== "") {
      if (e.key === "Enter") {
        onSearch(searchText);
        setSearchText("");
        history.push("/search");
      }
    }
  };

  const clickHandler = () => {
    if (searchText !== "") {
      onSearch(searchText);
      setSearchText("");
      history.push("/search");
    }
  };

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input
          type="text"
          placeholder="Search Products"
          value={searchText}
          onChange={handleInput}
          onKeyPress={handleEnterKeyPressed}
          onClick={clickHandler}
        />
        <i className="search icon"></i>
      </div>
    </div>
  );
};

export default SearchBar;
