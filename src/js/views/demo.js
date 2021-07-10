import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const Demo = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<h1>El tipo de cambio para hoy</h1>
			<h2>{store.variable1.fecha}</h2>
			<br />
			<p>
				Compra: <strong>{store.variable1.compra}</strong>
			</p>
			<p>
				venta: <strong>{store.variable1.venta}</strong>
			</p>
			<Link to="/">
				<button className="btn btn-primary">Back home</button>
			</Link>
		</div>
	);
};
