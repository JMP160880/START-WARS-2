import React, { useState, useEffect, useContext } from "react";
import CardPersonaje from "../component/cardPersonaje.jsx";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import Card from "../component/card.jsx";

export const Single = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	// console.log(params.theid);
	console.log(params.theid);
	const [informacionPersonaje,setInformacionPersonaje] = useState([])

	const obtenerPersonajesIndividuales = () => {
		fetch("https://www.swapi.tech/api/people/" + params.theid)
		.then(res => res.json())
		.then(data => setInformacionPersonaje(data.result))
		.catch(err => console.error(err))
		}
	
	useEffect(() =>{
		obtenerPersonajesIndividuales()
	},[])




	return (
		
		
		<div className="jumbotron">
		<h1 className="display-4">{informacionPersonaje.properties?.name} </h1>
		<hr className="my-4" />
		</div>
		
	);
};

Single.propTypes = {
	match: PropTypes.object
};
