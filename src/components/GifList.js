import React, { Component } from 'react';
import './app.css'


export default class GifList extends Component {
    render() {
        return (
             <ul className='gif'>
                 {this.props.searchList.map(gif=><li key={gif.id}><img src={gif.images.original.url} alt='gif'/></li>)}
             </ul>
        );
    }
};
