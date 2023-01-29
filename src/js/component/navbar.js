import React, {useContext} from "react"; //hacemos los pasos de usecontext 1
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js"; // 2

export const Navbar = () => {
	const {store}=useContext(Context); //store porque quiero acceder a favoritos
	console.log(store.favoritos);
	
	return (
		
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1 mx-5"><img src="https://pluspng.com/img-png/png-star-wars-star-wars-icon-png-50-px-1600.png"  width="60"  height="60" alt="" /></span>
			</Link>
			{/* <div className="ml-auto mx-5">
				<Link to="/demo">
					<button className="btn btn-primary mx-">Favorites</button>
				</Link>
			</div> */}


			<li className="nav dropdown">
    <a className="nav-link dropdown-toggle btn btn-primary text-white mx-5" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Favorites</a>
    <ul className="dropdown-menu">
     
    </ul>
  </li>
		</nav>
	);
};
