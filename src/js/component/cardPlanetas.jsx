import React from "react";
import { Link } from "react-router-dom";

const CardPlanetas   = (props) =>{
    return(
    
        <div className="card d-flex content-justify">
            <img src="https://cdn.pixabay.com/photo/2016/02/25/00/55/star-wars-1221118_640.jpg" className="card-img-top"height="350px" alt="..."/>
            <div className="card-body">
                <h5 className="card-title text-start fw-bold">{props.nombrePlaneta}</h5>
                <p className="card-text text-start"></p>
                <div className="d-flex justify-content-between">
                    <Link to={"/planeta/"+ props.idPlaneta} className="card-link">
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

export default CardPlanetas;