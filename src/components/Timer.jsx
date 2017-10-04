import React from 'react';
import EditTimer from "./EditTimer";
import ViewTimer from "./ViewTimer";

class Timer extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            edit: false
        }
    }

    onEdit(flag){
        this.setState({edit: flag});
    }

    render() {
        if(this.state.edit){
            return(
                <EditTimer
                    onEdit={(flag) => this.onEdit(flag)}
                    timer={this.props.timer}
                    onUpdate={this.props.onUpdate}
                />
            );
        }
        else{
            return(
                <ViewTimer
                    onEdit={(flag) => this.onEdit(flag)}
                    timer={this.props.timer}
                    onDelete={this.props.onDelete}
                />
            );
        }

    }
}

export default Timer;