import React from "react";

const SearchBox = ({textSearch, title, inputChange}) => {
    return (
        <div className="searcher">
            <label className="searcher__title">{title}</label>
            <input 
            className="searcher__searchInput"
            type ="text" 
            name ='textSearch'
            value = {textSearch}
            onChange={(e) => inputChange(e)}
            />
        </div>
    )

}

export default SearchBox;