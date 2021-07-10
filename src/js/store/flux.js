const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			variable1: {},
			variable2: ""
		},
		actions: {
			tipoCambio: () => {
				var requestOptions = {
					method: "GET",
					redirect: "follow"
				};

				fetch("https://tipodecambio.paginasweb.cr/api", requestOptions)
					.then(response => {
						if (response.status >= 200 && response.status < 300) {
							return response.json();
						}
					})
					.then(result => {
						setStore({ variable1: result });
					})
					.catch(error => error);
			}
		}
	};
};

export default getState;
