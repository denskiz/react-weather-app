import { useState } from "react";
import api from "../utils/api";

const searchCityContainer = () => {
  const [citySuggestions, setCitySuggestions] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [currentlySearching, setCurrentlySearching] = useState(false);
};

export default SearchCityContainer;
