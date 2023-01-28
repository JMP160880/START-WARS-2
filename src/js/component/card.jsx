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
                    <Link to="#" className="card-link">
                        <button type="button" className="btn btn-outline-primary">Learn more!</button>
                    </Link>
                    <Link to="#" className="card-link">
                        <button type="button" className="btn btn-outline-warning"><i className="fa fa-heart"></i></button>
                    </Link>
                </div>
               
            </div>
        </div>
    


    );
};

export default Card;