import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Singleplanets = (props) => {
    const { store, actions } = useContext(Context);
    
    const params = useParams();
    console.log(params);
  
    useEffect(() => {
    actions.obtenerInfoDeCadaPlaneta(params.theid);
    }, []);
    return (
      <>
        <div className="container mt-2 mb-2">
          <div className="jumbotron">
            {/* <hr className="my-4" /> */}
            
            {/* <Cartadetallespl nombre={detallePlaneta.name} />          */}

            <div className="d-flex flex-row">
        <img
          className="card-img-top"
          src={"https://starwars-visualguide.com/assets/img/planets/"+ params.theid + ".jpg"}    
          alt="Card image cap"
        ></img>
        <div className="card-body">
          <h1 className="mx-4 mb-2 card-title text-center">{store.detallePlaneta.name}</h1>
          <p className="mx-4 card-text text-center">
            Sed ut perspiciatis, unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam eaque ipsa,
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas
            sit, aspernatur aut odit aut fugit, sed quia consequuntur magni
            dolores eos, qui ratione voluptatem sequi nesciunt, neque porro
            quisquam est, qui dolorem ipsum, quia dolor sit amet, consectetur,
            adipisci velit, sed quia non numquam eius modi tempora inci dunt, ut
            labore et dolore magnam aliquam quaerat voluptatem.
          </p>
        </div>
      </div>
  
           <hr className="text-danger mt-5"/> 
          </div>
          <div className="d-flex container-fluid text-danger">
            <h6 className="col-3">Name</h6>
            <h6 className="col-3">Climate</h6>
            <h6 className="col-3">Population</h6>
            <h6 className="col-3">Orbital Period</h6>
            <h6 className="col-3">Rotation Period</h6>
            <h6 className="col-3">Diameter</h6>
          </div>
          <div className="d-flex container-fluid text-danger my-4">
            <h6 className="col-3">{store.detallePlaneta.name}</h6>
            <h6 className="col-3">{store.detallePlaneta.climate}</h6>
            <h6 className="col-3">{store.detallePlaneta.population}</h6>
            <h6 className="col-3">{store.detallePlaneta.orbital_period}</h6>
            <h6 className="col-3">{store.detallePlaneta.rotation_period}</h6>
            <h6 className="col-3">{store.detallePlaneta.diameter}</h6> 
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
  Singleplanets.propTypes = {
    match: PropTypes.object,
  };
  

    //NOTAS
    // import { Cartadetallespl } from "../component/cartadetallespl.js"; Que no es necesario utilizar porque cartadetallespl se puede popner ya de una en single planets
    // function obtenerInfoDeCadaPlaneta() {
    //   //La logica no se renderiza
    //   fetch("https://swapi.dev/api/planets/" + params.theid) // buscar que quede de forma dinamica useParams
    //     .then((res) => res.json())
    //     .then((data) => setDetallePlaneta(data))
    //     .catch((err) => console.error(err));
    // }
    // // console.log(detallePlaneta); //es un objeto que tiene toda la data de un Planeta
    // // console.log(detallePlaneta.name);