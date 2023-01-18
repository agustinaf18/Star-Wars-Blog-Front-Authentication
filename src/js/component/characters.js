import React from "react";
import { Link } from "react-router-dom";

export const Characters = (props) => {
  console.log(props);
	return (
  <>  
		<div
      className=" card-group row mx-5 my-2"
      style={{ width: "30rem" }}
    >
      <img
        src="https://turismolanzarote.com/wp-content/uploads/2017/03/Playas-PuertoDelCarmen-PlayaGrande-LR-5.jpg"
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{props.nombre}</h5>
        <p className="card-text">Gender: {props.genero}</p>
        <p className="card-text">Hair color: {props.pelo}</p> 
        <p className="card-text">Eye color: {props.ojos}</p> 

        <div className="card-footer d-flex">
          <Link to={"/single/"+ props.id} className="btn btn-primary mx-5" > Learn more! </Link>
          <button type="button" className="btn btn-outline-warning" style={{ height: 40, width: 40 }}> <i className="fa fa-heart"></i></button>

        </div>
      </div>
    </div>
    </>	
	);
};

//btn btn-primary btn-sm ms-2