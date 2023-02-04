import React,{useState, useEffect, useContext} from "react";
import { Link } from "react-router-dom";


const Card = (props) =>{
//FALTA METER DATOS DE STORE Y ACTIONS
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
                    <Link to="#" className="card-link">
                        <button onClick={()=>{addFav()}} type="button" className="btn btn-outline-warning"><i className="fa fa-heart"></i></button>
                    </Link>
                </div>
               
            </div>
        </div>
    


    );
};

export default Card;