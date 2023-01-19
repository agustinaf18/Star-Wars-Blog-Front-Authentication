import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Singlevehicles = (props) => {
  const { store, actions } = useContext(Context);

  const params = useParams();
  console.log(params);

  useEffect(() => {
    actions.obtenerInfoDeCadaVehicle(params.theid);   //params.theid es id en flux
  }, []);
  return (
    <>

<div className="container mt-2 mb-2">
        <div className="jumbotron">

          <div className="d-flex flex-row">
            <img
              className="card-img-top"
              src={
                "https://starwars-visualguide.com/assets/img/planets/" +
                params.theid +
                ".jpg"
              }
              alt="Card image cap"
            ></img>
            <div className="card-body">
              <h1 className="mx-4 mb-2 card-title text-center">
                {store.detalleVehicle.name}
              </h1>
              <p className="mx-4 card-text text-center">
                Sed ut perspiciatis, unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam eaque ipsa,
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia
                voluptas sit, aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos, qui ratione voluptatem sequi
                nesciunt, neque porro quisquam est, qui dolorem ipsum, quia
                dolor sit amet, consectetur, adipisci velit, sed quia non
                numquam eius modi tempora inci dunt, ut labore et dolore magnam
                aliquam quaerat voluptatem.
              </p>
            </div>
          </div>

          <hr className="text-danger mt-5" />
        </div>
        <div className="d-flex container-fluid text-danger">
          <h6 className="col-3">Name</h6>
          <h6 className="col-3">Capacity</h6>
          <h6 className="col-3">Speed</h6>
          <h6 className="col-3">Crew</h6>
          <h6 className="col-3">Length</h6>
          <h6 className="col-3">Model</h6>
        </div>
        <div className="d-flex container-fluid text-danger my-4">
          <h6 className="col-3">{store.detalleVehicle.name}</h6>
          <h6 className="col-3">{store.detalleVehicle.cargo_capacity}</h6>
          <h6 className="col-3">{store.detalleVehicle.max_atmosphering_speed}</h6>
          <h6 className="col-3">{store.detalleVehicle.crew}</h6>
          <h6 className="col-3">{store.detalleVehicle.length}</h6>
          <h6 className="col-3">{store.detalleVehicle.model}</h6> 
        </div>
      </div>

     
      {/* <Link to="/">
              <span
                className="btn btn-primary btn-lg position-absolute bottom-0 end-0 mx-4"
                href="#"
                role="button"
              >
                Back home
              </span>
            </Link> */}
    </>
  );
};
Singlevehicles.propTypes = {
  match: PropTypes.object,
};

//NOTAS
// import { Cartadetallespl } from "../component/cartadetallespl.js"; Que no es necesario utilizar porque cartadetallespl se puede popner ya de una en single planets
// function obtenerInfoDeCadaVehiculo() {
//   //La logica no se renderiza
//   fetch("https://swapi.dev/api/planets/" + params.theid) // buscar que quede de forma dinamica useParams
//     .then((res) => res.json())
//     .then((data) => setDetalleVehiculo(data))
//     .catch((err) => console.error(err));
// }
// // console.log(detalleVehiculo); //es un objeto que tiene toda la data de un Vehiculo
// // console.log(detalleVehiculo.name);
 {/* <hr className="my-4" /> */}

          {/* <Cartadetallespl nombre={detalleVehiculo.name} />          */}