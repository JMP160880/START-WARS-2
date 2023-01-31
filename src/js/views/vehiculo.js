import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Vehiculo = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	
	const [informacionVehiculo,setInformacionVehiculo] = useState([])

	const obtenerVehiculo = () => {
		fetch("https://www.swapi.tech/api/vehicles/" + params.theid)
		.then(res => res.json())
		.then(data => setInformacionVehiculo(data.result))
		.catch(err => console.error(err))
		}
	
	useEffect(() =>{
		obtenerVehiculo()
	},[])




	return (
		<div className="card mb-3 w-200">
  <div className="row g-0">
    <div className="col-md-4">
      <img src="https://cdn.pixabay.com/photo/2017/10/11/14/57/spaceship-2841277_640.png" className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-7">
      <div className="card-body">
        <h1 className="card-title fw-bold text-decoration-underline lh-base text-center">{informacionVehiculo.properties?.name}</h1>
        <p className="card-text text-justify">This is a wider card with supporting text below as a natural lead-in to additional content.This is a wider card with supporting text below as a natural lead-in to additional content.This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
		<table className="table table-borderless ">
      <thead className="table-danger text-danger">
        <tr>
          <th scope="col"></th>
          <th scope="col">Name</th>
          <th scope="col">Model</th>
          <th scope="col">Length</th>
	        <th scope="col">Crew</th>
	        <th scope="col">Cost In Credits</th>
	        <th scope="col">Cargo Capacity</th>
        </tr>
      </thead>
      <tbody className="table-warning text-danger">
        <tr>
          <th scope="row"></th>
          <td>{informacionVehiculo.properties?.name}</td>
          <td>{informacionVehiculo.properties?.model}</td>
          <td>{informacionVehiculo.properties?.length}</td>
	        <td>{informacionVehiculo.properties?.crew}</td>
	        <td>{informacionVehiculo.properties?.cost_in_credits}</td>
	        <td>{informacionVehiculo.properties?.cargo_capacity}</td>
        </tr>
      </tbody>
    </table>
	</div>		
	);
};

Vehiculo.propTypes = {
	match: PropTypes.object
};