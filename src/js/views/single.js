import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { cartaDetalles }  from "../component/cartadetallesdesingle.js";

export const Single = props => {
	const { store, actions } = useContext(Context);
	const [detallePersonaje, setDetallePersonaje]=useState([])
	const params = useParams();
	console.log(params)

	function obtenerInfoDeCadaPersonajes(){                                 //La logica no se renderiza
		fetch("https://www.swapi.dev/api/people/")
	   .then(res => res.json())
	   .then(data => setDetallePersonaje(data.results))
	   .catch(err => console.error(err))
	} 
	console.log(detallePersonaje);
	
  useEffect(() => {
	obtenerInfoDeCadaPersonajes();
  }, [])



	return (	
		<>

		<cartaDetalles/>
		<div className="jumbotron">
		     
			 <hr className="my-4" />
 
			 <Link to="/">
				 <span className="btn btn-primary btn-lg" href="#" role="button">
					 Back home
				 </span>
			 </Link>
		 </div>
		</>
		
		
	);
};

Single.propTypes = {
	match: PropTypes.object
};
