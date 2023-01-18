import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1 mx-5"><img src="https://pluspng.com/img-png/png-star-wars-star-wars-icon-png-50-px-1600.png"  width="60"
                                  height="60" alt="" /></span>
			</Link>
			{/* <div className="ml-auto mx-5">
				<Link to="/demo">
					<button className="btn btn-primary mx-">Favorites</button>
				</Link>
			</div> */}


			<li className="nav dropdown">
    <a className="nav-link dropdown-toggle btn btn-primary text-white mx-5" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Favorites</a>
    <ul className="dropdown-menu">
      <li><a className="dropdown-item" href="#">Action</a></li>
      <li><a className="dropdown-item" href="#">Another action</a></li>
      <li><a className="dropdown-item" href="#">Something else here</a></li>
      <li><hr className="dropdown-divider"hr/></li>
      <li><a className="dropdown-item" href="#">Separated link</a></li>
    </ul>
  </li>
		</nav>
	);
};
