import React from "react";
import { Link } from "react-router-dom";

const CardVehiculos   = (props) =>{
    return(
    
        <div className="card d-flex content-justify">
            <img src="https://cdn.pixabay.com/photo/2017/10/11/14/57/spaceship-2841277_640.png" className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title text-start fw-bold">{props.nombreVehiculo}</h5>
                <p className="card-text text-start"></p>
                <div className="d-flex justify-content-between">
                    <Link to={"/vehiculo/"+ props.idVehiculo} className="card-link">
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

export default CardVehiculos;