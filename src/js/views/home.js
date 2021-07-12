import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";
import "../../styles/home.scss";
import { Loading } from "../component/loading";

export const Home = () => {
	let ruta = useHistory();
	const { store, actions } = useContext(Context);
	const [usuario, setusuario] = useState("");
	const [espera, setEspera] = useState("false");

	const entrar = usuario => {
		actions.ingreso(usuario);
		setusuario("");
		setEspera(true);
		setInterval(() => {
			ruta.push("/demo");
		}, 3000);
	};
	if (espera == true) {
		return <Loading />;
	} else {
		return (
			<div className="container-fluid">
				<div className="row justify-content-center">
					<div className="logbox col-12 col-md-6 col-lg-4 text-center mt-5">
						<h1 className="title">Welcome!</h1>
						<p id="textoBienvenida">Organize your tasks, you will not forget them again !!</p>
						<input
							id="login"
							className="d-block mx-auto mt-3 text-center"
							placeholder="Username"
							type="text"
							onChange={e => setusuario(e.target.value)} //va cargando los valores que se escriben en tiempo real
							value={usuario} //variable que toma el dato escrito en el imput
							onKeyPress={e => {
								if (e.key == "Enter") {
									/// reconoce cuando el usuario preciona enter
									if (usuario !== "") {
										//no permite que el usuario quede en blanco
										entrar(usuario);
									} else {
										alert("Type a Username and press enter"); //si preciono enter con el usuario en blanco muestra un mensaje
									}
								}
							}}
						/>
						<button //boton que nos envia a la vista interna
							className="btn btn-success d-block mx-auto mt-5"
							type="button"
							disabled={usuario == ""} //aqui se habilita al boton
							onClick={() => {
								entrar(usuario); //funcion de ingreso
							}}>
							Get in
						</button>
					</div>
				</div>
			</div>
		);
	}
};
