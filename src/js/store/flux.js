const getState = ({
    getStore,
    getActions,
    setStore
}) => {
    return {
        store: {
            personajes: [],
            planetas: [],
            vehicles: [],
            detallePlaneta: {},
            detallePersonaje: {},
            detalleVehicle: {},
            favoritos: [],
        },
        actions: {
            // Use getActions to call a function within a fuction
            exampleFunction: () => {
                getActions().changeColor(0, "green");
            },
            obtenerPersonajes: () => {
                fetch("https://swapi.dev/api/people/")
                    .then(res => res.json())
                    .then(data => setStore({
                        personajes: data.results
                    }))
                    .catch(err => console.error(err))
            },

            obtenerPlanetas: () => {
                fetch("https://swapi.dev/api/planets/")
                    .then(res => res.json())
                    .then(data => setStore({
                        planetas: data.results
                    }))
                    .catch(err => console.error(err))
            },

            obtenerVehicles: () => {
                fetch("https://swapi.dev/api/vehicles/")
                    .then(res => res.json())
                    // .then(data=> console.log(data.results))
                    .then(data => setStore({
                        vehicles: data.results
                    }))
                    // .then(data => setStore({
                    //     personajes: data.results
                    // }))
                    .catch(err => console.error(err))

            },


            obtenerInfoDeCadaPersonajes: (id) => {
                //La logica no se renderiza  paso por parametros el id cuando hago click a un planeta se capta el id al momento de cada planeta
                fetch("https://swapi.dev/api/people/" + id) // buscar que quede de forma dinamica useParams, 
                    .then((res) => res.json())
                    .then((data) => setStore({
                        detallePersonaje: data
                    }))
                    .catch((err) => console.error(err));
            },
            // console.log(detallePersonaje); //es un objeto que tiene toda la data de un Planeta
            // console.log(detallePersonaje.name);

            obtenerInfoDeCadaPlaneta: (id) => {
                //La logica no se renderiza  paso por parametros el id cuando hago click a un planeta se capta el id al momento de cada planeta
                fetch("https://swapi.dev/api/planets/" + id) // buscar que quede de forma dinamica useParams, 
                    .then((res) => res.json())
                    .then((data) => setStore({
                        detallePlaneta: data
                    }))
                    .catch((err) => console.error(err));
            },
            // console.log(detallePlaneta); //es un objeto que tiene toda la data de un Planeta
            // console.log(detallePlaneta.name);

            obtenerInfoDeCadaVehicle: (id) => {
                fetch("https://swapi.dev/api/vehicles/" + id)
                    .then((res) => res.json())
                    .then(data => setStore({
                        detalleVehicle: data
                    }))
                    .catch((err) => console.error(err));
            },

            agregarFavorito: (props, nombre, id) => {
                let store = getStore(); //tenemos que traer el array favoitos
                let contenedordeelemento = {} //necesitamos recorrer el array favorito guardarlo en  contenedordeelemento
                contenedordeelemento.nombresdecadatema = props.nombre
                contenedordeelemento.id = props.id
                setStore({
                    favoritos: [...store.favoritos, contenedordeelemento]
                })
            },

            eliminarDatos: (id) => {
                let store = getStore(); //tenemos que traer el array favoitos
                const contenedorparaborrar = store.favoritos; //declaramos la varaible contenedordeborrear donde vamos a guardar store.favoritos que en el array favoritos tenemos los nombres  favoritos: [...store.favoritos, contenedordeelemento] dentro del array favoritos esta contenedordeelemento que es donde esta la info del nombre,  ya trajimos recien el [] favoritos con la info que necesitabamos los nombres, en resumen creamos una varaible en la que guardamos el array de favoritos con los nombres

                contenedorparaborrar.splice(id); //metodo w3schools para remover elemento  y le pasamos como parametro id que va con el nombre, que definimos en la funcion de arriba de agregarFavorito, dentro de el array favoritos se encuentra el nombre y el id, estos dentro de contenedordeelemento

                setStore({
                    favoritos: contenedorparaborrar //guardamos contenedorparaborrar en el [{}] favoritos
                });

            },

            loadSomeData: () => {
                /**
                	fetch().then().then(data => setStore({ "foo": data.bar }))
                */
            },
            changeColor: (index, color) => {
                //get the store
                const store = getStore();

                //we have to loop the entire demo array to look for the respective index
                //and change its color
                const demo = store.demo.map((elm, i) => {
                    if (i === index) elm.background = color;
                    return elm;
                });

                //reset the global store
                setStore({
                    demo: demo
                });
            }
        }
    };
};

export default getState;


//notas
// 1 despues de traer el  primer fetch  y llamarla en appcontext
// 2 luego el map en home con vehiculos por ej es para el home 
// hacemos el otro fetch de la funcion obtenerInfoDeCadaVehiculo ej y luego llamarla en su correspondiente single