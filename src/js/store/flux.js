const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			personajes: [],
			planetas: [],
			vehiculos: [],
			informacionPersonaje: [],
			informacionPlaneta: [],
			informacionVehiculo: [],
			
		},
		actions: {
			// Use getActions to call a function within a fuction
		
			obtenerPersonajes: () => {
				fetch("https://www.swapi.tech/api/people/",{
					method: "GET"
				})
				.then(res => res.json())
				.then(data => setPersonajes(data.results))
				.catch(err => console.error(err))
				},
			
			obtenerPlanetas: () => {
				fetch("https://www.swapi.tech/api/planets/",{
					method: "GET"
				})
				.then(res => res.json())
				.then(data => setPlanetas(data.results))
				.catch(err => console.error(err))
				},
			
			obtenerVehiculos: () => {
				fetch("https://www.swapi.tech/api/vehicles",{
					method: "GET"
				})
				.then(res => res.json())
				.then(data => setVehiculos(data.results))
				.catch(err => console.error(err))
				},
			obtenerPersonajesIndividuales: () => {
				fetch("https://www.swapi.tech/api/people/" + params.theid)
				.then(res => res.json())
				.then(data => setInformacionPersonaje(data.result))
				.catch(err => console.error(err))
				},
			obtenerPlaneta: () => {
				fetch("https://www.swapi.tech/api/planets/" + params.theid)
				.then(res => res.json())
				.then(data => setInformacionPlaneta(data.result))
				.catch(err => console.error(err))
				},
			obtenerVehiculo: () => {
				fetch("https://www.swapi.tech/api/vehicles/" + params.theid)
				.then(res => res.json())
				.then(data => setInformacionVehiculo(data.result))
				.catch(err => console.error(err))
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
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
