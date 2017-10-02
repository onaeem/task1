import React from 'react';
import C1 from './C1';
// import C2 from './C2';

class App extends React.Component{
    render() {
        return(
            <div className="container"
                 style={{display: 'center'}}>
                <C1/>
            </div>
        );
    }
}

export default App;