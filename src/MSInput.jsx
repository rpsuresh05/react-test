import { useEffect, useState } from "react";
import Pill from "./Pill";

const MSInput = () => {
  const [searchText, setSearchText] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState([]);
  // https://dummyjson.com/users/search?q=Jo

  useEffect(() => {
    const fetchUsers = () => {
      // setActiveSuggestion(0);
      if (searchText.trim() === "") {
        setSuggestions([]);
        return;
      }

      fetch(`https://dummyjson.com/users/search?q=${searchText}`)
        .then((res) => res.json())
        .then((data) => setSuggestions(data))
        .catch((err) => {
          console.error(err);
        });
    };

    fetchUsers();
  }, [searchText]);

  const handleSelectUser = (user) => {
    setSelectedUsers([...selectedUsers, user]);
    setSearchText("");
    setSuggestions([]);
  };

  return (
    <div className="user-search-cont">
      <div className="user-search-input">
        {/* Pills */}
        {/* input field */}
        {selectedUsers.map((each) => (
          <Pill
            key={each.email}
            img={each.image}
            name={`${each.firstName} ${each.lastName}`}
            onChange={() => handleRemove(each)}
          />
        ))}
        <div>
          <input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search here"
          />
          {/* search suggestions */}
          <ul className="suggestions-list">
            {suggestions?.users?.map((each) => (
              <li onClick={() => handleSelectUser(each)} key={each.email}>
                <img
                  src={each.image}
                  alt={`${each.firstName} ${each.lastName}`}
                />
                <span>{`${each.firstName} ${each.lastName}`}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MSInput;
