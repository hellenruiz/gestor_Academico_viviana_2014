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

// Middlewares
app.use(cors()); //Cada petición que llegue podrá enviar y recibir datos
app.use(morgan('dev'));
app.use(express.json());



// Routes
//app.use('/api/student', require('./routes/student'));
app.use('/api/teacher', require('./routes/teachers'));
app.use('/api/admin', require('./routes/admin'));
app.use('/api/users', require('./routes/users'));

// Static Files
app.use(express.static(path.join(__dirname, 'public')));;

module.exports = app;