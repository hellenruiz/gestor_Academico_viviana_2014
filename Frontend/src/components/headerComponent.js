import React, { Component } from 'react'

//Importando Link para que no refresque la pantalla
import {Link} from 'react-router-dom';

class headerComponent extends Component {
  	constructor(props){
		super(props)
	}
	
	render() {
    	return (
			<div>
				<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  					<div className="container	">
						<Link className="navbar-brand" to="/">Home</Link>
    					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      						<span className="navbar-toggler-icon"></span>
    					</button>
    				<div className="collapse navbar-collapse" id="navbarSupportedContent">
      					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
        					<li class="nav-item">
									<Link className="navbar-brand" to="/admin">Administrador</Link>
        					</li>
        					<li class="nav-item">
									<Link className="navbar-brand" to="/student">Estudiantes</Link>
        					</li>
        					<li class="nav-item dropdown">
									<Link className="navbar-brand" to="/teachers">profesores</Link>
        					</li>
        					<li class="nav-item">
									<Link className="navbar-brand" to="/">Sobre nosotros</Link>
        					</li>
      					</ul>
      					<form class="d-flex">
        					<input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        					<button class="btn btn-outline-success" type="submit">Search</button>
      					</form>
    				</div>
  				</div>
			</nav>
		</div>
        );
  	}
}

export default headerComponent;
