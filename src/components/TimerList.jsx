import React from 'react';
import Timer from './Timer';

class TimerList extends React.Component{



    render() {
        return(
            <div style={{margin: '10px'}}>
                <div>
                    {

                        this.props.timers.map((timer) => {
                            console.log(timer + " " );
                            return(
                                <div>
                                    <Timer
                                        timer={timer}
                                        onUpdate={(newTimer, oldTimer, created_time, updated_time) =>
                                            this.props.onUpdate(newTimer, oldTimer, created_time, updated_time)}
                                        onDelete={(identifier) => this.props.onDelete(identifier)}
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