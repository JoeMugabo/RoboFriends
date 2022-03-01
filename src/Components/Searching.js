import React from "react";

const Searching = ({searchField, searchChange}) => {
    return (
        <div className="pa2">
            <input className="pa3 ba b-- bg-lightest-blue" 
            type='search' placeholder="Locating My Gang"
            onChange={searchChange} />
        </div>
    )
}

export default Searching