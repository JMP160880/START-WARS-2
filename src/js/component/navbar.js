import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light mb-5">
			<Link to="/">
			<img src="https://lumiere-a.akamaihd.net/v1/images/sw_logo_stacked_2x-52b4f6d33087_7ef430af.png?region=0,0,586,254" width="100px" className="img-thumbnail bg-dark ms-5" alt="..."/>
			</Link>
			<div className="ml-auto">
			{/* <Link to="/demo"> */}
				<div className="dropdown me-5">
  			<button className="btn btn-primary btn-lg dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    			Favoritos
  			</button>
  			<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    			<li><Link className="dropdown-item" to="#">Acción</Link></li>
  			</ul>
			</div>
				{/* </Link> */}
			</div>
		</nav>
	);
};
