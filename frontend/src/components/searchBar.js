import { useState } from "react";
import "../styles/searchBar.css"

const SearchBar = ({handleSearchRequest}) => {
    const [cityName, setCityName] = useState('');

    const handleSubmit = () => {
        handleSearchRequest({city:cityName})
    }

    const img_url = ''


    return (
        <div className="searchBoxContainer">
            <div className='searchBar'>
                <input 
                    type="text"
                    value={cityName}
                    placeholder="Enter City Name"
                    onChange={(e)=>{
                        setCityName(e.target.value)
                    }}
                    />
                <button
                    onClick={handleSubmit}
                >
                    <span className="material-symbols-outlined">search</span>
                </button>
            </div>
        </div>
    );
};

export default SearchBar;