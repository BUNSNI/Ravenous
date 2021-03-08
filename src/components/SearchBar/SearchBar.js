import React from 'react';

import './SearchBar.css';


class SearchBar extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
             term : '',
             location: '',
             sortBy: 'best_match',
        }

        this.sortByOptions = {
            'Best Match': 'best_match',
            'Highest Rated': 'rating',
            'Most Viewed': 'review_count',
        }

        this.handleBusinessSearch = this.handleBusinessSearch.bind(this);
        this.handleLocationSearch = this.handleLocationSearch.bind(this);
        this.handleClick = this.handleClick.bind(this)

    }


    getSortByClass(arg){
        if (this.state.sortBy === arg) {
            return 'active'
        } else {
            return ''
        }
    }


    handleSortByChange(arg){
        this.setState({
            sortBy : arg,
        })
    }

    handleBusinessSearch(e){
        this.setState({
            term : e.target.value,
        })
    }


    handleLocationSearch(e){
        this.setState({
            location : e.target.value,
        })
    }

    handleClick(e){
        this.props.searchYelp(
            this.state.term, this.state.location, this.state.sortBy
        );
        e.preventDefault();
    }
    

    renderSortByOptions(){
        //creates a list of keys from sortByOptions
        let keys = Object.keys(this.sortByOptions);
        //creates a list of values iterating through keys list
        return keys.map(x => 
             (
                <li key={this.sortByOptions[x]} className={this.getSortByClass(this.sortByOptions[x])} onClick={this.handleSortByChange.bind(this, this.sortByOptions[x])}>{x}</li>
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
                        <input placeholder="Search Businesses" type='text' onInput={this.handleBusinessSearch}/>
                        <input placeholder="Where?" type='text' onInput={this.handleLocationSearch}/>
                    </div>
                    <div className="SearchBar-submit" >
                        <a onClick={this.handleClick} >Let's Go</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default SearchBar;
