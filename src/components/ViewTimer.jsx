import React from 'react';
import Moment from 'react-moment';

class ViewTimer extends React.Component{

    render() {
        return(
            <div>
                <div style={{marginRight: '10px'}}>
                    <div>
                        <br/>
                        <h4>
                            <strong>{this.props.timer.title}</strong>
                        </h4>
                        <em>
                            <strong>Creation Time:{" "}</strong>
                            <Moment
                                format="DD-MM-YYYY  hh:mm:ss"
                            >
                                {this.props.timer.created_time}
                            </Moment>
                        </em>
                        <em>  </em>
                        <em>
                            <strong>Update Time:{" "}</strong>
                            <Moment
                                format="DD-MM-YYYY  hh:mm:ss"
                            >
                                {this.props.timer.updated_time}
                            </Moment>
                        </em>
                        <em>  </em>
                        <button
                            style={{margin: '10px'}}
                            className="btn btn-sm btn-primary"
                            onClick = {() => this.props.onEdit(true)}
                        >
                            Edit
                        </button>
                        <button
                            className="btn btn-sm btn-danger"
                            onClick={() => this.props.onDelete(this.props.timer)}
                        >
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default ViewTimer;