	// your code is going to go here, for now

	const Pet = ({ name, animal, breed }) => {
		return React.createElement("div", {}, [
			React.createElement("h1", {}, name),
			React.createElement("h2", {}, animal),
			React.createElement("h2", {}, breed)
		]);
	};

	const App = () => {
		return React.createElement(
			"div",
			{},
			[
				React.createElement("h1", {}, "Adopt Me!"),
				React.createElement(Pet, {
					name: "Ozzy", 
					animal: "Dog", 
					breed: "Pug"}),
				React.createElement(Pet, {
					name: "Tino", 
					animal: "Dog", 
					breed: "Labrador"}),
				React.createElement(Pet, {
					name: "Girlbert th. 2", 
					animal: "Cat", 
					breed: "Mix"})
			]
		);
	};
	
	ReactDOM.render(
		React.createElement(App),
		document.getElementById("root")
	);