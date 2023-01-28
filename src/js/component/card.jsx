import React from "react";

const Card = (props) =>{
    return(
    <div className="card-group ">
        <div className="card">
            <img src="..." className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{props.nombre}</h5>
                <p className="card-text">Esta es una tarjeta más amplia con texto de apoyo a continuación como introducción natural a contenido adicional. Este contenido es un poco más largo.</p>
                <p className="card-text"><small className="text-muted">Última actualización hace 3 minutos</small></p>
            </div>
        </div>
    </div>


    );
};

export default Card;