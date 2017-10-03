import React from 'react';

class EditTimer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            updatedTimer: this.props.timer,
            oldTimer: this.props.timer
        }
    }

    render() {
        return(
            <div style={{margin: '10px'}}>
                <div>
                    <input
                        placeholder="Update Timer"
                        onChange={(event) => this.setState({updatedTimer: event.target.value})}
                        value={this.state.updatedTimer}
                    />
                    <button
                        className="btn btn-sm btn-primary"
                        onClick={() => {
                            this.props.onUpdate(this.state.updatedTimer, this.state.oldTimer);
                            this.setState({oldTimer: this.state.updatedTimer});
                            this.props.onEdit(false);
                        }}
                    >
                        Save
                    </button>
                    <button
                        className="btn btn-sm btn-danger"
                        onClick={() => this.props.onEdit(false)}
                    >
                        Cancel
                    </button>
                </div>
            </div>
        )
    }
}

export default EditTimer;