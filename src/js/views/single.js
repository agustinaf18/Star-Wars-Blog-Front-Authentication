import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  console.log(params);
  
  useEffect(() => {
    actions.obtenerInfoDeCadaPersonajes(params.theid);
  }, []);
  return (
    <>
      <div className="container mt-2 mb-2">
        <div className="jumbotron">
          <div className="d-flex flex-row">
        <img
          className="card-img-top"
          src={"https://starwars-visualguide.com/assets/img/characters/" +
          params.theid +
          ".jpg"}
          alt="Card image cap"
        ></img>
        <div className="card-body">
          <h1 className="mx-4 mb-2 card-title text-center">{store.detallePersonaje.name}</h1>
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
          <h6 className="col-3">Birth Year</h6>
          <h6 className="col-3">Gender</h6>
          <h6 className="col-3">Height</h6>
          <h6 className="col-3">Skin Color</h6>
          <h6 className="col-3">Eye color</h6>
        </div>
        <div className="d-flex container-fluid text-danger my-4">
          <h6 className="col-3">{store.detallePersonaje.name}</h6>
          <h6 className="col-3">{store.detallePersonaje.birth_year}</h6>
          <h6 className="col-3">{store.detallePersonaje.gender}</h6>
          <h6 className="col-3">{store.detallePersonaje.height}</h6>
          <h6 className="col-3">{store.detallePersonaje.skin_color}</h6>
          <h6 className="col-3">{store.detallePersonaje.eye_color}</h6>
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
Single.propTypes = {
  match: PropTypes.object,
};




//NOTAS DE ANTES, ASI TENIAMOS EL CODIGO ANTES DE APLICAR LO DEL FLUX
// import { Cartadetalles } from "../component/cartadetalles.js";       ERA EN FILA 5 
// const [detallePersonaje, setDetallePersonaje] = useState({});
//NOTAS
  // function obtenerInfoDeCadaPersonajes() {
  //   //La logica no se renderiza
  //   fetch("https://swapi.dev/api/people/" + params.theid) // buscar que quede de forma dinamica useParams
  //     .then((res) => res.json())
  //     .then((data) => setDetallePersonaje(data))
  //     .catch((err) => console.error(err));
  // }
  // console.log(detallePersonaje); //es un objeto que tiene toda la data de un personaje
  // console.log(detallePersonaje.name);                                  ERA EN FILA 12


  {/* <hr className="my-4" /> */}
          
          {/* <Cartadetalles nombre={detallePersonaje.name} />          */}   