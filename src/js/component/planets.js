import React from "react";


export const Planets = (props) => {
  console.log(props);
	return (
    <>
    <div
      className="card-group row mx-5 my-2"
      style={{ width: "30rem" }}
    >
      <img
        src="https://turismolanzarote.com/wp-content/uploads/2017/03/Playas-PuertoDelCarmen-PlayaGrande-LR-5.jpg"
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{props.nombreplanet}</h5>
        <p className="card-text">
          Population: 2000000000
        </p>

        <div className="card-footer d-flex">
          <a href="#" className="btn btn-primary mx-5">
            Go somewhere
          </a>
          <button type="button" className="btn btn-outline-warning mx-3 " style={{ height: 40, width: 40 }}> <i className="fa fa-heart"></i></button>
        </div>
      </div>
    </div>
    </>
		
		
	);
};
