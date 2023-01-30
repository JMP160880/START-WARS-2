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
		<div className="card mb-3 w-200">
  <div className="row g-0">
    <div className="col-md-4">
      <img src="..." className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-7">
      <div className="card-body">
        <h1 className="card-title fw-bold text-decoration-underline lh-base">{informacionPersonaje.properties?.name}</h1>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
    <div className="card-footer d-flex">
		<div className="container">
  			<div className="row gx-5">
    			<div className="col-lg-2">
     			<div className="border bg-light text-center">Custom column padding</div>
   			</div>
    		<div className="col-lg-2">
      			<div className="border bg-warning text-center">Custom column padding</div>
    		</div>
			<div className="col-lg-2">
      			<div className="border bg-warning text-center">Custom column padding</div>
    		</div>
			<div className="col-lg-2">
      			<div className="border bg-warning text-center">Custom column padding</div>
    		</div>
			<div className="col-lg-2">
      			<div className="border bg-warning text-center">Custom column padding</div>
    		</div>
			<div className="col-lg-2">
      			<div className="border bg-warning text-center">Custom column padding</div>
    		</div>
  		</div>
		</div>
	</div>
</div>

		
	);
};

Single.propTypes = {
	match: PropTypes.object
};
