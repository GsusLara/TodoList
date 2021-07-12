const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			tareas: [],
			urlUsuario: ""
		},
		actions: {
			ingreso: usuario => {
				let temporal = [];
				let url = `https://assets.breatheco.de/apis/fake/todos/user/${usuario}`;
				setStore({ urlUsuario: url });
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
			},
			actualizar: (nuevaListaTareas, direccionUsuario) => {
				setStore({ tareas: nuevaListaTareas });
				let subir = nuevaListaTareas.map(item => {
					///formatea el array contenido en lista, para que sea entendido por la api, agregando etiquetas que necesita
					let obj = { label: "", done: false };
					obj.label = item;
					return obj; //devuelve el objeto y lo carga en la variable "subir" en formato json, similar al descargado al inicio de la pagina
				});

				let parametros = {
					//parametros necesarios para la carga de la informacion en la api
					method: "PUT",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(subir) //se incluye el objeto con la lista que queremos subir
				};

				fetch(direccionUsuario, parametros) //se ejecuta la consulta con los datos anteriores
					.then(response => {
						if (response.status >= 200 && response.status < 300) {
							//se filtra la respuesta del servidor
							return "Updated successfully"; //si la respuesta es correcta nos da ekl mensaje
						} else {
							return "fail"; //si da error nos lo indica
						}
					})
					.then(result => alert(result))
					.catch(error => alert("error", error)); //captura cualquier otro tipo de error
			},
			userborrado: direccionUsuario => {
				//funcion para eliminar un usuario
				fetch(direccionUsuario, { method: "DELETE" }) //solicitud a la api
					.then(response => {
						if (response.status >= 200 && response.status < 300) {
							//filtra la respuesta
							return "User deletion completed";
						} else {
							return "There was a problem!";
						}
					})
					.then(result => alert(result))
					.catch(error => alert("error", error));
				setStore({ tareas: [] });
			}
		}
	};
};

export default getState;
