import React from 'react'
import Fetch from 'react-fetch'

export default class FetchTest extends React.Component{

    constructor() {
        super();
        this.state = {
            abc: ['abc', 'bcd']
        };
    }

    render(){
        return (
            <Fetch url="https://randomuser.me/api/">
                <TestComponent abc={this.state}/>
            </Fetch>
        )
    }

}

class TestComponent extends React.Component{
    render(){
        console.log(this.props);
        return <div/>
    }
}