import React, { Component } from 'react';
import Header from './components/Header';
import Nav from './components/Nav';

class App extends Component {
    render() {
        return (
            <div>
                <Header/>       
                <Nav/>
            </div>
        );
    }
}

export default App;
