import React, {Component} from 'react';
import './App.css';
import Main from './components/mainComponent'
import {BrowserRouter, Route} from 'react-router-dom';

//Importando estilos bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-social/bootstrap-social.css';

class App extends Component {
    constructor(props){
        super(props)
    }
    
    
    render(){
        return (
            <BrowserRouter>
                <div>
                    <Main/>
                </div>
            </BrowserRouter>
        );
    };
};

export default App;
