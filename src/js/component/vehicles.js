import React from "react";
import { Link } from "react-router-dom";

export const Vehicles = (props) => {
  console.log(props);
	return (
    <>
    <div
      className="card-group row mx-5 my-2"
      style={{ width: "30rem" }}
    >
      <img
        src={"https://starwars-visualguide.com/assets/img/vehicles/"+props.id+".jpg"}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{props.nombre}</h5>
        <p className="card-text">Model: {props.modelo}</p>
        <p className="card-text">Passengers: {props.pasajeros}</p>  

        <div className="card-footer d-flex">
          <Link to={"/singlevehicles/" + props.id} className="btn btn-primary mx-5 " style={{ width: 80 }} > Learn </Link>
        {/* <Link to={"/singleplanets/"+ props.id} className="btn btn-primary mx-5 " style={{ width: 80 }} > Learn </Link> */}
          <button type="button" className="btn btn-outline-warning mx-3 " style={{ height: 40, width: 40 }}> <i className="fa fa-heart"></i></button>
        </div>
      </div>
    </div>
    </>
		
		
	);
};
