import React,{useState, useEffect} from "react";
import rigoImage from "../../img/rigo-baby.jpg";
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
	<div className="text-center mt-5">
	<h1>Hello Rigo!</h1>
	<p>
		<img src={rigoImage} />
	</p>
	<a href="#" className="btn btn-success">
		If you see this green button, bootstrap is working
	</a>
	
	{personajes.map((item)=><Card key={item.uid} nombre={item.name}/>)}
</div>
)
}
//<li key={item.uid}>{item.name}</li>)
