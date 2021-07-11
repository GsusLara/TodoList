import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/demo.scss";

export const Demo = () => {
	const { store, actions } = useContext(Context);
	// let borrar = dato => {
	// 	//funcion para borrar una tarea en la lista
	// 	setLista(lista.filter(salida => salida !== dato)); //elimina esa tarea en el array lista haciendo un filtrado de la totalidad por parabra
	// };
	// const guardar = (direccion, lista) => {
	// 	//inicia la funcion de consulta al api para guardar la lista modificada en la pagina web

	// 	let subir = lista.map(item => {
	// 		///formatea el array contenido en lista, para que sea entendido por la api, agregando etiquetas que necesita
	// 		let obj = { label: "", done: false };
	// 		obj.label = item;
	// 		return obj; //devuelve el objeto y lo carga en la variable "subir" en formato json, similar al descargado al inicio de la pagina
	// 	});

	// 	let parametros = {
	// 		//parametros necesarios para la carga de la informacion en la api
	// 		method: "PUT",
	// 		headers: { "Content-Type": "application/json" },
	// 		body: JSON.stringify(subir) //se incluye el objeto con la lista que queremos subir
	// 	};

	// 	fetch(direccion, parametros) //se ejecuta la consulta con los datos anteriores
	// 		.then(response => {
	// 			if (response.status >= 200 && response.status < 300) {
	// 				//se filtra la respuesta del servidor
	// 				return "Updated successfully"; //si la respuesta es correcta nos da ekl mensaje
	// 			} else {
	// 				return "fail"; //si da error nos lo indica
	// 			}
	// 		})
	// 		.then(result => alert(result)) //imprime la respuesta enviada por el then anterior
	// 		.catch(error => alert("error", error)); //captura cualquier otro tipo de error
	// 	setLista([]); //limpia el array lista
	// };
	// const userborrado = () => {
	// 	//funcion para eliminar un usuario
	// 	fetch(direccion, { method: "DELETE" }) //solicitud a la api
	// 		.then(response => {
	// 			if (response.status >= 200 && response.status < 300) {
	// 				//filtra la respuesta
	// 				return "User deletion completed";
	// 			} else {
	// 				return "There was a problem!";
	// 			}
	// 		})
	// 		.then(result => alert(result))
	// 		.catch(error => alert("error", error));
	// 	setLista([]);
	// };
	// const [habilitado, sethabilitado] = useState(true); //variables para habilitar el boton de guardado

	return (
		<div className="text-center mt-5">
			{/* <h1 className="title">ToDos</h1>
			<div className="container">
				<ul className="list-group">
					<input
						className="list-group-item"
						type="text"
						placeholder="What needs to be done?"
						onChange={e => setTarea(e.target.value)} //toma los datos en tiempo real del imput
						value={tarea} //carga los datos en la variable tarea
						onKeyPress={e => {
							if (e.key == "Enter") {
								//detecta cuando se preciona enter
								if (tarea !== "") {
									//evita el ingreso de datos en blanco
									setLista(lista => [...lista, tarea]); //carga esa tarea al array lista
									setTarea(""); //limpia la variable
									sethabilitado(false); //habilita el boton de guardar
								} else {
									alert("Type a task and press enter"); //si preciono enter y estaba el input en blanco
								}
							}
						}}
					/>
					{lista.map((
						item,
						index ///descompone el array para mostrarlo en el listado visual para el usuario
					) => (
						<li key={index} className="list-group-item">
							{item}
							<button //boton de borrado de tarea
								type="button"
								style={{ float: "right" }}
								className="btn btn-light"
								onClick={() => {
									sethabilitado(false); //habiliota el boton para guardar
									borrar(item); //llama a la funcion para borrar una tarea
								}}>
								<i className="fas fa-trash-alt"></i>
							</button>
						</li>
					))}

					<li className="list-group-item" id="lastItem">
						{lista.length} item left
						<Link to="/">
							<button //boton para guardar la info
								id="save"
								type="button"
								className="btn btn-success"
								disabled={habilitado}
								onClick={() => {
									sethabilitado(true); //deshabilita el boton de guardar
									guardar(direccion, lista); //llama al la funcion para cargar la informacion a la api
								}}>
								Save an exit
							</button>
						</Link>
					</li>
				</ul>
			</div>
			<hr />
			<Link to="/">
				<button //boton para borrar usuario
					type="button"
					className="btn btn-secondary btn-sm"
					style={{
						display: "block",
						marginLeft: "2%",
						float: "left"
					}}
					onClick={() => userborrado()}>
					Delete user
				</button>
			</Link>
			<Link to="/">
				<button //boton para salir sin modificar nada
					type="button"
					className="btn btn-primary btn-sm"
					style={{
						marginLeft: "2%",
						display: "block",
						float: "left"
					}}>
					Exit without save
				</button>
			</Link> */}
		</div>
	);
};
