import React from 'react';

class NewTimer extends React.Component{

    constructor(){
        super();
        this.state = {
            title: ''
        }
    }
    render() {
        return(
            <div className="form-inline">
                <div className="form-group">
                    <input
                        id="input-field"
                        type="text"
                        placeholder="Title"
                        className="form-control"
                        onChange={(event) => this.setState({title: event.target.value})}
                        value={this.state.title}
                    />
                    <button
                        className="btn btn-sm btn-danger"
                        onClick={() => {
                            this.props.AddTimer(this.state.title);
                            this.setState({title: ''});
                        }}
                    >
                        Add
                    </button>
                </div>
            </div>
        );
    }
}

export default NewTimer;