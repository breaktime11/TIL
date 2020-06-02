import React from 'react';

const Search = ({location}) => {
    return (
        <div>
            Search Keyword : {new URLSearchParams(location.search).get("keyword")}
        </div>
    );
};

export default Search;