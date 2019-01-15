
import React from 'react';
import GifList from '../components/GifList';
import GifSearch from '../components/GifSearch';


export default class GifListContainer extends React.Component {

    state={
        gifList:[],
        searchList:[],
        searchVal:''
    }

    onChangeHandler=(e) => {
        this.setState({searchVal:e.target.value})
    }

    searchHandler=(e) => {
        e.preventDefault();
        const newGifList=[...this.state.gifList].filter(gif=>gif.title.includes(this.state.searchVal))
        this.setState({
            searchList:newGifList
        })
    }

    componentDidMount(){
        console.log('com did mount');
        fetch('http://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=dc6zaTOxFJmzC&rating=g')
            .then(res=>res.json())
            .then(gifs=>this.setState({
                gifList:gifs.data,
                searchList:gifs.data
            }))
    }

    render() {
        console.log(this.state.gifList);
        return (
             <div>
                 <GifList searchList={this.state.searchList.slice(0,3)}/>
                 <GifSearch searchHandler={this.searchHandler} onChangeHandler={this.onChangeHandler} />
             </div>
        );
    }
};
