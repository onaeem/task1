import React from 'react';

class ViewTimer extends React.Component{

    render() {
        return(
            <div>
                <div style={{margin: '10px'}}>
                    <div>
                        <strong style={{margin: '10px'}}>
                            {this.props.timer}
                        </strong>
                        <button
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