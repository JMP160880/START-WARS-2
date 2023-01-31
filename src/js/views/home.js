import React,{useState, useEffect} from "react";
import "../../styles/home.css";
import Card from "../component/card.jsx";
import CardPlanetas from "../component/cardPlanetas.jsx";
import CardVehiculos from "../component/cardVehiculos.jsx";

export const Home = () => {

const [personajes,setPersonajes] = useState([])
const [planetas,setPlanetas] = useState([])
const [vehiculos,setVehiculos] = useState([])

const obtenerPersonajes = () => {
	fetch("https://www.swapi.tech/api/people/",{
		method: "GET"
	})
	.then(res => res.json())
	.then(data => setPersonajes(data.results))
	.catch(err => console.error(err))
	}

const obtenerPlanetas = () => {
	fetch("https://www.swapi.tech/api/planets/",{
		method: "GET"
	})
	.then(res => res.json())
	.then(data => setPlanetas(data.results))
	.catch(err => console.error(err))
	}

const obtenerVehiculos = () => {
	fetch("https://www.swapi.tech/api/vehicles",{
		method: "GET"
	})
	.then(res => res.json())
	.then(data => setVehiculos(data.results))
	.catch(err => console.error(err))
	}

useEffect(() =>{
	obtenerVehiculos()
	obtenerPlanetas()
	obtenerPersonajes()
},[])



return(
	<div className="row text-center">
    <div className="col-lg-4 col-md-4" >
		<h1 className="fw-bold text-decoration-underline">PERSONAJES</h1>
		{personajes.map((item)=> <Card key={item.uid} nombre={item.name} id={item.uid} /> )}
    </div>
	<div className="col-lg-4 col-md-4" >
	<h1 className="fw-bold text-decoration-underline">VEHICULOS</h1>
	{vehiculos.map((item)=> <CardVehiculos key={item.uid} nombreVehiculo={item.name} idVehiculo={item.uid}/>)}
 	</div>
	<div className="col-lg-4 col-md-4" >
	<h1 className="fw-bold text-decoration-underline">PLANETAS</h1>
	{planetas.map((item)=> <CardPlanetas key={item.uid} nombrePlaneta={item.name} idPlaneta={item.uid}/>)}
 	</div>
	</div>
)
}

