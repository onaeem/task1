import React from 'react';


let prom1 = new Promise(
    function (resolve, reject) {
        setTimeout(() => {
            resolve('a value')
        }, 2000)
    }
);
let prom2 = new Promise(
    function (resolve, reject) {
        setTimeout(() => {
            reject(this.state.val2)
        }, 2000)
    }
);


export default class PromiseTest extends React.Component {
    constructor() {
        super();
        this.state = {
            val2: 'a value 2'
        };
        prom1.then((value) => {
            this.setState({val: value});
        });
        prom2.then((reject) => {
            this.setState({val: reject});
        })
    }

    render() {
        return <div>{this.state.val}</div>
    }
}