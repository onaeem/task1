import React from 'react';
import NewTimer from './NewTimer';
import TimerList from './TimerList';


class TimerApp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            titles: []
        }
    }

    onUpdate(newTimer, oldTimer){
        console.log("this.state.titles.indexOf(oldTimer) : "+ this.state.titles.indexOf(this.oldTimer));
        this.setState({
            title:this.state.titles.splice(this.state.titles.indexOf(oldTimer), 1, newTimer)
        })
    }

    onDelete(identifier){
        this.setState({
            title:this.state.titles.splice(this.state.titles.indexOf(identifier), 1)
        })
    }

    AddTimer(title) {
        this.setState({
            title:this.state.titles.push(title)
        })
    }

    render() {
        return(
            <div className="container"
                 style={{display: 'center'}}
            >
                <NewTimer AddTimer={this.AddTimer.bind(this)}/>
                <TimerList
                    timers={this.state.titles}
                    onUpdate={(newTimer,oldTimer) => {this.onUpdate(newTimer,oldTimer)}}
                    onDelete={(identifier) => {this.onDelete(identifier)}}
                />
            </div>
        )
    }
}

export default TimerApp;