import _ from 'lodash'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import YTSearch from 'youtube-api-search'
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'
import SearchBar from './components/search_bar';


const API_KEY = 'AIzaSyCcv_oro5oJ81gTRK10sQHAaRL4BTaHnYs';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            videos : [],
            selectedVideo : null
        };

        this.videoSearch('Yomaste Ladakh VR experience');

    }

    videoSearch(term){
        YTSearch({key:API_KEY , term : term} , (videos) => {
            this.setState({
                videos:videos,
                selectedVideo:videos[0]
            });
        })
    }

    //In VideoList we are passing array of videos in the form of props.
    // onVideoSelect is a function which takes selected Video
    render() {

        const videoSearch = _.debounce((term) => {this.videoSearch(term)} , 300);

        return(
        <div>
            <SearchBar onSearchTermChange = {term => this.videoSearch(term)}/>
            <VideoDetail video={this.state.selectedVideo}/>  
            <VideoList 
            onVideoSelect = {selectedVideo  => this.setState({selectedVideo}) }
            videos = {this.state.videos}/> 
        </div>
        );
        
    };
}

ReactDOM.render(<App />,document.querySelector('.container'));
