import React from 'react';

class C3 extends React.Component{

    constructor(){
        super();
        this.state = {
            index: '',
            edit: false
        }
    }
    componentWillMount(){
        this.setState({index: this.props.index});
    }
    editModeEnabled(){

    }
    render() {

        return(
            <div style={{margin: '10px'}} key={this.state.index}>
                <span>{this.state.index}</span>
                <strong style={{margin: '10px'}}>{this.props.title}</strong>
                <button
                    className="btn btn-sm btn-danger"
                    onClick={() => this.props.Del(this.state.index) }
                >
                    Delete
                </button>
                <button
                    className="btn btn-sm btn-primary"
                    onClick={() => {
                            this.setState({edit: true});
                            console.log("C3 Edit Index: ", this.state.index, " Enabled: ", this.state.edit);
                            this.props.Ed(this.state.index, this.state.edit);
                        }
                    }
                >
                    Edit
                </button>
            </div>
        );
    }
}

export default C3;