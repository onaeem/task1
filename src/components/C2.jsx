import React from 'react';
import C3 from './C3';

class C2 extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            titles: [],
            edit: false
        }
    }
    clearAll = () => {
    //equals//// clearAll()= {
        this.setState({titles: []});
    };

    Delete = (key) => {
        console.log("this.state.titles: " + this.state.titles);
        console.log("Delete index: " + key);

        if(key === 0 && this.state.titles.length === 1){
            this.setState({titles: []});
        }
        else{
            let newTitles = this.state.titles.splice(key, 1);
            this.state.titles.pop();
            this.setState({title: newTitles});
        }

    };

    Edit = (key, edit) => {
            console.log("Edit");

            if(edit){
                this.setState({edit: true});
            }

            //this.setState({edit: true});
            //this.props.enableEditMode(key , edit);
            console.log("C2 Edit Index: ", key, " Enabled: ", this.state.edit);


        // let newTitles = this.state.titles.splice(key, 1);
        // this.state.titles.splice(key, 1, "changed Element");
        // this.setState({title: newTitles});
    };
    // componentWillUpdate(){
    //     this.Edit();
    //
    // }

    shouldComponentUpdate(nextProps){
        this.state.titles.push(nextProps.title);
        return true;
    }
    render() {
        console.log(this.state.titles);
        return(
            <div>
                {
                    this.state.titles.map((title, index) => {
                        console.log(title + " " + index);
                        return(
                            <div>
                                {console.log("this.state.edit: " + this.state.edit)}
                                <C3
                                    title={title}
                                    index={index}
                                    Del={this.Delete}
                                    Ed={this.Edit}
                                />
                            </div>


                        )
                    })
                }
                <button
                    className="btn btn-sm btn-primary"
                    onClick={() => this.clearAll()}
                >
                    Clear All
                </button>


            </div>

        );

    }

}

export default C2;