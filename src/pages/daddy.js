import React from 'react';
import joeVideo from "../assets/video/joe.mp4";

const VideoPage = () => (
    <div className="row full-page-video">
        <video width="90%" height="90%" controls disablePictureInPicture controlsList="nodownload">
            <source src={joeVideo} type="video/mp4" />
        </video>
    </div>
)

export default VideoPage