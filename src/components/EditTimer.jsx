import React from 'react';

class EditTimer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            created_time: this.props.timer.created_time,
            updated_time: this.props.timer.updated_time,
            updatedTimer: this.props.timer.title,
            oldTimer: this.props.timer.title
        }
    }

    render() {
        return(
            <div className="form-inline">
                <div className="form-group">
                    <input
                        style={{width: '450px'}}
                        className="form-control"
                        placeholder="Update Timer"
                        onChange={(event) => {
                            this.setState({updatedTimer: event.target.value});
                            this.setState({updated_time: Date.now()});
                        }}
                        value={this.state.updatedTimer}
                    />
                    <button
                        style={{margin: '10px'}}
                        className="btn btn-sm btn-primary"
                        onClick={() => {

                            this.props.onUpdate(this.state.updatedTimer, this.state.oldTimer, this.state.created_time, this.state.updated_time );
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