import React from 'react'

class DigitalClicker extends React.Component {
    state = {
        timesClicked: 0
    }
    updateClick = () => {
        this.setState(prevState => {
           return { timesClicked: prevState.timesClicked + 1 }
        })
    }

    render(){
    return (
    <button onClick={this.updateClick}>{this.state.timesClicked}</button>
        )
    }
}

export default DigitalClicker