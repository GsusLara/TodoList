import React, { Component } from "react";

export const Footer = () => (
	<footer className="footer mt-auto py-3 text-center text-secondary">
		<p>
			Made by{" "}
			<a href="https://github.com/GsusLara" className="text-decoration-none">
				<i className="fab fa-github text-primary">
					{" "}
					<span className="text-secondary">Jesus Lara</span>{" "}
				</i>
			</a>{" "}
			for{" "}
			<a href="http://www.4geeksacademy.com" className="text-decoration-none text-secondary">
				4Geeks Academy
			</a>
		</p>
	</footer>
);
