// Code YouTubeDebugger Component Here
// Code DigitalClicker Component Here
import React from 'react';





class YoutubeDebugger extends React.Component {

constructor() {
    super()
    this.state = {
        errors: [],
        user: null,
        settings: {
          bitrate: 8,
          video: {
            resolution: '1080p'
          }
        }
      }
}


        handleBitrateChange = () => {
        this.setState(prev => {
            prev.settings.bitrate = 12
            return prev
        })
        }

        handleResolutionChange = () => {
        this.setState(prev => {
            prev.settings.video.resolution = '720p'
            return prev
        })
        }

        componentDidUpdate(prevState){
            if(prevState !== this.state){
                console.log(prevState, "has now been updated to", this.state)
            }
        }



    render(){
        return(
            <div>
            <button onClick={this.handleBitrateChange} className="bitrate">bitrate</button>
            <button onClick={this.handleResolutionChange} className="resolution">resolution</button>
            </div>
        )
    }
}


export default YoutubeDebugger;