import React, { Component } from 'react';
import './app.css'

export default class GifSearch extends Component {
    render() {
        return (
             <form className='search-form' onSubmit={(e)=>this.props.searchHandler(e)}>
                 <label>Enter the search item:</label><br/>
                 <input type='text' value={this.props.searchVal} onChange={(e)=>this.props.onChangeHandler(e)} /><br/>
                 <input type='submit' value="Find Gif"/>
             </form>
        );
    }
};
