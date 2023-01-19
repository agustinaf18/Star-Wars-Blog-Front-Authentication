const getState = ({
    getStore,
    getActions,
    setStore
}) => {
    return {
        store: {
            personajes: [],
            planetas: [],
            detallePlaneta: {},
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