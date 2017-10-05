import React from 'react';

class NewTimer extends React.Component{

    constructor(){
        super();
        this.state = {
            title: '',
            created_time: '',
            updated_time: ''
        }
    }
    render() {
        return(
            <div className="form-inline">
                <div className="form-group">
                    <input
                        style={{marginRight: '20px', width: '550px'}}
                        id="input-field"
                        type="text"
                        placeholder="Title"
                        className="form-control"
                        onChange={(event) => {
                            this.setState({title: event.target.value});
                            this.setState({updated_time: Date.now()});
                            this.setState({created_time: Date.now()});
                        }}
                        value={this.state.title}
                    />
                    <button
                        className="btn btn-success"
                        onClick={() => {
                            this.props.AddTimer(this.state);
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

