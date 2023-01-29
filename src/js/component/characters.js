import React, {useContext} from "react"; // tenemos que importar lo del usecontext como lo de la store, porque si la store estaba en flux he importamos el usecontext y eso, con lo de chr, planets y vehicles hacemos lo mismo. al sacar de flux elementos de usa el use context y todos sus pasos detras 
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";

export const Characters = (props, nombre, id) => {
  const {actions}=useContext(Context)

  console.log(props);
	return (
  <>  
		<div
      className=" card-group row mx-5 my-2"
      style={{ width: "30rem" }}
    >
      <img
        src={"https://starwars-visualguide.com/assets/img/characters/"+props.id+".jpg" }
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{props.nombre}</h5>
        <p className="card-text">Gender: {props.genero}</p>
        <p className="card-text">Hair color: {props.pelo}</p> 
        <p className="card-text">Eye color: {props.ojos}</p> 

        <div className="card-footer d-flex ">
          <Link to={"/single/"+ props.id} className="btn btn-primary mx-5 " style={{ width: 80 }} > Learn </Link>
          <button onClick={()=>actions.agregarFavorito(props, nombre, id)} type="button" className="btn btn-outline-warning" style={{ height: 40, width: 40 }}> <i className="fa fa-heart"></i></button>

        </div>
      </div>
    </div>
    </>	
	);
};

//btn btn-primary btn-sm ms-2