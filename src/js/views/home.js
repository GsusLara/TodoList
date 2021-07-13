import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Login } from "../component/login.js";
import { Inside } from "../component/inside.js";
import { Footer } from "../component/footer.js";

export const Home = () => {
	const { store, actions } = useContext(Context);
	return (
		<>
			{store.externa ? <Login /> : <Inside />}
			<Footer />
		</>
	);
};
