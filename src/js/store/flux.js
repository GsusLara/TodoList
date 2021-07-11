const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			tareas: [],
			variable2: ""
		},
		actions: {
			ingreso: usuario => {
				let temporal = [];
				let url = `https://assets.breatheco.de/apis/fake/todos/user/${usuario}`;
				fetch(url, {
					//peticion get a la api
					method: "GET",
					headers: { "Content-Type": "application/json" }
				})
					.then(respuesta => {
						if (respuesta.status >= 200 && respuesta.status < 300) {
							//condicional que valora las respuestas del servidor.
							return respuesta.json(); // si la respuesta es correcta envia el archivo en formato json
						} else {
							fetch(url, {
								// si la respuesta es de error realiza la peticion post para crear el usuario
								method: "POST",
								body: JSON.stringify([]),
								headers: { "Content-Type": "application/json" }
							});
							return "Usuario creado"; //retorna que el usuario se creo correctamente
						}
					})
					.then(result => {
						//recibe lo que filtra el primer then
						if (Array.isArray(result) === true) {
							//si la respuesta es un array
							for (let i = 0; i < result.length; i++) {
								temporal.push(result[i].label); //descompone el array que manda el api y alimenta la variable temporal
							}
							setStore({ tareas: temporal }); //carga la variable tareas con las tareas que provienen de la variable temporal
							temporal = []; //limpia la variable temporal
						} else {
							alert(result); //si la respuesta del primer then no es un array, lo muestra en la pagina
						}
					})
					.catch(error => alert("error", error)); //captura otros errores
			}
		}
	};
};

export default getState;
