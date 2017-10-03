import React from 'react';
import NewTimer from './NewTimer';
import TimerList from './TimerList';


class TimerApp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            timers: JSON.parse(localStorage.getItem('KEY'))
        }
    }

    componentDidUpdate(){
        const str = JSON.stringify(this.state.timers);
        localStorage.setItem('KEY', str);
    }

    onUpdate(newTimer, oldTimer, created_time, updated_time){

        console.log(newTimer, oldTimer, updated_time);
        let index;
        this.state.timers.forEach( (timer) => {
            if(oldTimer === timer.title){
                index = this.state.timers.indexOf(timer);
            }}
        );
        this.setState({
            timer: this.state.timers.splice(index, 1 , {title: newTimer, created_time: created_time, updated_time: updated_time})
        })
    }

    onDelete(identifier){
        this.setState({
            title:this.state.timers.splice(this.state.timers.indexOf(identifier), 1)
        })
    }

    AddTimer(timer) {
        this.setState({
            title:this.state.timers.push(timer)
        })
    }

    render() {
        return(
            <div
                className="container"
                style={{display: 'center', padding: '50px'}}
            >
                <NewTimer AddTimer={(object) => this.AddTimer(object)}/>
                <TimerList
                    timers={this.state.timers}
                    onUpdate={(newTimer, oldTimer, created_time, updated_time) => {this.onUpdate(newTimer, oldTimer, created_time, updated_time)}}
                    onDelete={(identifier) => {this.onDelete(identifier)}}
                />
            </div>
        )
    }
}

export default TimerApp;