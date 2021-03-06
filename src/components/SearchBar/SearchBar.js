import React from 'react';

import './SearchBar.css';

let sortByOptions = {
    'Best Match': 'best_match',
    'Highest Rated': 'rating',
    'Most Viewed': 'review_count',
}

class SearchBar extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
             term : '',
             location: '',
             sortBy: 'Best Match',
        }
    }
    

    renderSortByOptions(){
        //creates a list of keys from sortByOptions
        let keys = Object.keys(sortByOptions);
        //creates a list of values iterating through keys list
        return keys.map(x => 
             (
                <li key={sortByOptions[x]}>{x}</li>
            ));
}
        

    render() {
        return (
            <div>
                <div className="SearchBar">
                    <div className="SearchBar-sort-options">
                        <ul>
                        {this.renderSortByOptions()}
                        </ul>
                    </div>
                    <div className="SearchBar-fields">
                        <input placeholder="Search Businesses" />
                        <input placeholder="Where?" />
                    </div>
                    <div className="SearchBar-submit">
                        <a>Let's Go</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default SearchBar;
