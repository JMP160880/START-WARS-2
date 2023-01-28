import React from "react";
import { Link } from "react-router-dom";

const Card = (props) =>{
    return(
    
        <div className="card d-flex content-justify">
            <img src="..." className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title text-start fw-bold">{props.nombre}</h5>
                <p className="card-text text-start">Esta es una tarjeta más amplia con texto de apoyo a continuación como introducción natural a contenido adicional. Este contenido es un poco más largo.</p>
                <div className="d-flex justify-content-between">
                    <a Link to="#" class="card-link">
                        <button type="button" class="btn btn-outline-primary">Learn more!</button>
                    </a>
                    <a Link to="#" class="card-link">
                        <button type="button" class="btn btn-outline-warning"><i class="fa fa-heart"></i></button>
                    </a>
                </div>
               
            </div>
        </div>
    


    );
};

export default Card;