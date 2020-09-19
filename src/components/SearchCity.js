import React from "react";

const SearchCity = ({
  handleOnChange,
  handleChangeCity,
  suggestions,
  value,
  currentlySearching,
}) => {
  return (
    <div className="row" id="search">
      <datalist id="suggestions">{suggestions}</datalist>
      <div class="d-flex justify-content-center align-items-center container ">
        <form
          id="search-form"
          className="form-group col-xs-12 col-sm-6"
          onSubmit={handleChangeCity}
        >
          <div className="form-group">
            <div className="input-group">
              <input
                name="search"
                className={`form-control ${
                  currentlySearching ? "search-spinner" : ""
                }`}
                placeholder="Search weather in a different city"
                value={value}
                onChange={handleOnChange}
                type="text"
                list="suggestions"
              />
              <button
                class="btn btn-outline-secondary"
                type="submit"
                onClick={() => handleChangeCity(value)}
              >
                <i className="fa fa-search"></i>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchCity;
