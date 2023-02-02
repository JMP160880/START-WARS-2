import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";


export const Single = props => {
	
	const params = useParams();
	
	const [informacionPersonaje,setInformacionPersonaje] = useState([])


	


	return (
		<div className="card mb-3 w-200 ">
  <div className="row g-0">
    <div className="col-md-4">
      <img src={"https://starwars-visualguide.com/assets/img/characters/" + params.theid+ ".jpg"} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-7">
      <div className="card-body">
        <h1 className="card-title fw-bold text-decoration-underline lh-base text-center">{informacionPersonaje.properties?.name}</h1>
        <p className="card-text text-justify">This is a wider card with supporting text below as a natural lead-in to additional content.This is a wider card with supporting text below as a natural lead-in to additional content.This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
		<table className="table table-borderless ">
      <thead className="table-danger text-danger">
        <tr>
          <th scope="col"></th>
          <th scope="col">Name</th>
          <th scope="col">Birth Year</th>
          <th scope="col">Hair Color</th>
	        <th scope="col">Eye Color</th>
	        <th scope="col">Height</th>
	        <th scope="col">Mass</th>
        </tr>
      </thead>
      <tbody className="table-warning text-danger">
        <tr>
          <th scope="row"></th>
          <td>{informacionPersonaje.properties?.name}</td>
          <td>{informacionPersonaje.properties?.birth_year}</td>
          <td>{informacionPersonaje.properties?.hair_color}</td>
	        <td>{informacionPersonaje.properties?.eye_color}</td>
	        <td>{informacionPersonaje.properties?.height}</td>
	        <td>{informacionPersonaje.properties?.mass}</td>
        </tr>
      </tbody>
    </table>
	</div>		
	);
};

Single.propTypes = {
	match: PropTypes.object
};
