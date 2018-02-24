import React from 'react';
import VideoListItem from './video_list_item'

const VideoList = (props) => {
    //Here for each video we are passing it as Prop to VideoListItem which receives it and return videos
    const videoItems = props.videos.map((video) => {
        return <VideoListItem
        onVideoSelect = {props.onVideoSelect}
         key={video.etag} 
         video={video} />
    });

    return(
        <ul className = "col-md-4 list-group">
        {videoItems}
        </ul>

    )
}

export default VideoList;