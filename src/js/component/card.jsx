import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import {Context} from "../store/appContext.js"


const Card = (props) =>{
    const{store,actions}= useContext(Context)
	const params = useParams();
    const [favorito,setFavorito] = useState({});
    const [listaFavoritos,setListaFavoritos] = useState([]);

    const addFav = (e) =>{
        if(console.log(props.nombre)){
            setListaFavoritos(listaFavoritos.concat(favoritos))
        }
    }
    const deleteFav = (id) =>{
        let borrar = listaFavoritos[id]
        setListaFavoritos(listaFavoritos.filter((item) => item!=borrar))
    }

   
    return(
    
        <div className="card d-flex content-justify m-2 border-warning border border-3">
            <img src={"https://starwars-visualguide.com/assets/img/characters/" + props.id+ ".jpg"} className="card-img-top"height="350px" alt="..."/>
            <div className="card-body">
                <h5 className="card-title text-start fw-bold">{props.nombre}</h5>
                <p className="card-text text-start"></p>
                <div className="d-flex justify-content-between">
                    <Link to={"/single/"+ props.id} className="card-link">
                        <button type="button" className="btn btn-outline-primary border-primary border border-2 fw-bold">Learn more!</button>
                    </Link>
                    <ul>
                    <Link className="card-link">
                        <button onChange={(e)=>setFavorito(e.target.value)} value={favorito}
                         onClick={addFav}
                        type="button" className="btn btn-outline-warning"><i className="fa fa-heart"></i></button>
                    </Link>
                    {listaFavoritos.map((item,id) => (
					<li  key={id}>
						{item} <button onClick={()=>deleteFav(id)}>
						<i className="fa fa-trash"></i></button>
					</li>
				))}
                    </ul>
                </div>
               
            </div>
        </div>
    


    );
};

export default Card;