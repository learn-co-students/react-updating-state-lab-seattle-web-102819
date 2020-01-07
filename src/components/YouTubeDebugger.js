import React from 'react'

class YouTubeDebugger extends React.Component {
    state = {
        errors: [],
        user: null,
        settings: {
            bitrate: 8,
            video: {
                resolution: '1080p'
            }
        }
    }

    handleBitrate = () => {
        this.setState(prevState => {
            return {
                settings: {
                ...prevState.settings,
                bitrate: 12
                }
            }
        })
    }

    handleResolution = () => {
        this.setState(prevState => {
            return {
                settings: {
                    ...prevState.settings,
                    video: {
                        resolution: '720p'
                    }
                }
            }
        })
    }

    render() {
        return (
            <div>
        <button className='bitrate' onClick={this.handleBitrate}>Change Bitrate</button>
        <button className='resolution' onClick={this.handleResolution}>Change Resolution</button>
        </div>
        )
    }
}

export default YouTubeDebugger