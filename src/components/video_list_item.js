import React from 'react';

//Here below in parameter we can pass props and then get video but
//instead of props we can write {video} which will give access to property video.
const VideoListItem = ({video , onVideoSelect}) => {
    console.log(video);
    //const video = props.video;
    const imageUrl = video.snippet.thumbnails.default.url;

    return (
        <li onClick={() => onVideoSelect(video )}  className="list-group-item">
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" src={imageUrl}/>
                </div>

                <div className="media-body">
                    <div className="media-heading">{video.snippet.title}</div>
                </div>
            </div>
        </li>
    );
};

export default VideoListItem;