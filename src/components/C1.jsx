import React from 'react';
import C2 from './C2';

class C1 extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            title: '',
            edit: false
        }
    }

    enableEditMode(key) {
        //this.setState({edit: true});
        console.log("C1 Edit: ", key);
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
                    />

                    <button
                        className="btn btn-success"
                        onClick={() => {
                            if(this.state.edit) {
                                console.log("is in edit mode");
                            }
                            else {
                                this.setState({title: document.getElementById("input-field").value});
                                document.getElementById("input-field").value = '';
                            }
                        }}
                    >
                        Submit
                    </button>
                </div>
                {console.log(this.state.title)}
                <div>
                    <C2 title={this.state.title} edit={this.state.edit} enableEditMode={this.enableEditMode}/>
                </div>
            </div>
        );
    }
}

export default C1;