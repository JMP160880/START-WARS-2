import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Planeta = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	
	const [informacionPlaneta,setInformacionPlaneta] = useState([])

	const obtenerPlaneta = () => {
		fetch("https://www.swapi.tech/api/planets/" + params.theid)
		.then(res => res.json())
		.then(data => setInformacionPlaneta(data.result))
		.catch(err => console.error(err))
		}
	
	useEffect(() =>{
		obtenerPlaneta()
	},[])




	return (
		<div className="card mb-3 w-200">
  <div className="row g-0">
    <div className="col-md-4">
      <img src="https://cdn.pixabay.com/photo/2016/02/25/00/55/star-wars-1221118_640.jpg" className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-7">
      <div className="card-body">
        <h1 className="card-title fw-bold text-decoration-underline lh-base text-center">{informacionPlaneta.properties?.name}</h1>
        <p className="card-text text-justify">This is a wider card with supporting text below as a natural lead-in to additional content.This is a wider card with supporting text below as a natural lead-in to additional content.This is a wider card with supporting text below as a natural lead-in to additional content.This is a wider card with supporting text below as a natural lead-in to additional content.This is a wider card with supporting text below as a natural lead-in to additional content.This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
		<table className="table table-borderless ">
      <thead className="table-danger text-danger">
        <tr>
          <th scope="col"></th>
          <th scope="col">Name</th>
          <th scope="col">Diameter</th>
          <th scope="col">Gravity</th>
	        <th scope="col">Rotation Period</th>
	        <th scope="col">Surface Water</th>
	        <th scope="col">Climate</th>
        </tr>
      </thead>
      <tbody className="table-warning text-danger">
        <tr>
          <th scope="row"></th>
          <td>{informacionPlaneta.properties?.name}</td>
          <td>{informacionPlaneta.properties?.diameter}</td>
          <td>{informacionPlaneta.properties?.gravity}</td>
	        <td>{informacionPlaneta.properties?.rotation_period}</td>
	        <td>{informacionPlaneta.properties?.surface_water}</td>
	        <td>{informacionPlaneta.properties?.climate}</td>
        </tr>
      </tbody>
    </table>
	</div>		
	);
};

Planeta.propTypes = {
	match: PropTypes.object
};