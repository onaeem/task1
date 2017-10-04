import React from 'react';
import Timer from './Timer';

class TimerList extends React.Component{

    render() {
        return(
            <div style={{margin: '10px'}}>
                <div>
                    {
                        this.props.timers.map((timer) => {
                            return(
                                <div>
                                    <Timer
                                        timer={timer}
                                        onUpdate={this.props.onUpdate}
                                        onDelete={this.props.onDelete}
                                    />
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        );
    }
}

export default TimerList;