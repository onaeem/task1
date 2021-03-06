import React from 'react';
import NewTimer from './NewTimer';
import TimerList from './TimerList';


class TimerApp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            timers: [],
            variable: 'Button not clicked'
        };
        this.onUpdate = this.onUpdate.bind(this);
        this.onDelete = this.onDelete.bind(this);
        this.addTimer = this.addTimer.bind(this);

    }
    componentWillMount(){
        if(localStorage.getItem('KEY') === null){
            this.setState({timers: []});
        }
        else {
            this.setState({timers: JSON.parse(localStorage.getItem('KEY'))})
        }
    }

    componentDidUpdate(){
        localStorage.setItem('KEY', JSON.stringify(this.state.timers));
    }

    onUpdate(newTimer, oldTimer, created_time, updated_time){
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

    addTimer(newTimer) {
        this.setState({
            title:this.state.timers.push(newTimer)
        })
    }

    render() {
        return(
            <div
                className="container"
                style={{display: 'center', padding: '50px'}}
            >
                <NewTimer AddTimer={this.addTimer}/>
                {/*<Test variable={this.state.variable} setButton={() => this.setButton()}/>*/}
                <TimerList
                    timers={this.state.timers}
                    onUpdate={this.onUpdate}
                    onDelete={this.onDelete}
                />
            </div>
        )
    }
}

export default TimerApp;