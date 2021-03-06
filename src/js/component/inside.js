import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/demo.scss";

export const Inside = () => {
	const { store, actions } = useContext(Context);
	const [tarea, setTarea] = useState("");
	const [lista, setLista] = useState(store.tareas);

	const borrar = dato => {
		//funcion para borrar una tarea en la lista
		setLista(lista.filter(salida => salida !== dato)); //elimina esa tarea en el array lista haciendo un filtrado de la totalidad por parabra
	};

	const userdel = enlace => {
		actions.borradoUser(enlace);
		actions.portada(true);
		setLista([]);
	};

	const guardar = (tareaslista, enlaseUsuario) => {
		if (tareaslista.length == 0) tareaslista = ["sample task"];
		actions.guardarTareas(tareaslista, enlaseUsuario);
		actions.portada(true);
		setLista([]);
	};

	return (
		<div className="row justify-content-center text-center mt-5">
			<div className="col-12">
				<h1 className="title">ToDos</h1>
			</div>
			<div className="col-10 mt-5 mb-5">
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
									borrar(item); //llama a la funcion para borrar una tarea
								}}>
								<i className="fas fa-trash-alt"></i>
							</button>
						</li>
					))}

					<li className="list-group-item" id="lastItem">
						{lista.length} item left
						<button //boton para guardar la info
							type="button"
							className="btn btn-secondary btn-sm BotBorrarUsuario"
							onClick={() => userdel(store.urlUsuario)}>
							Delete user
						</button>
					</li>
				</ul>
			</div>
			<div className="col-12">
				<button //boton para borrar usuario
					type="button"
					className="btn btn-primary mb-5"
					onClick={() => guardar(lista, store.urlUsuario)}>
					Save and exit
				</button>
			</div>
		</div>
	);
};
