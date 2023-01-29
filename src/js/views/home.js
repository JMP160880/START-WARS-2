import React,{useState, useEffect} from "react";
import "../../styles/home.css";
import Card from "../component/card.jsx";

export const Home = () => {

const [personajes,setPersonajes] = useState([])

const obtenerPersonajes = () => {
	fetch("https://www.swapi.tech/api/people/",{
		method: "GET"
	})
	.then(res => res.json())
	.then(data => setPersonajes(data.results))
	.catch(err => console.error(err))
	}

useEffect(() =>{
	obtenerPersonajes()
},[])

console.log(personajes);

return(
	//<div className="text-center d-flex mt-5">
	
	<div className="row text-center">
    <div className="col-lg-4 col-md-4" >
	{personajes.map((item)=><Card key={item.uid} nombre={item.name} genero={item.gender} />)}
    </div>
  </div>
//</div>
)
}

