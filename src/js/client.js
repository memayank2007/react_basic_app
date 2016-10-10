import React from "react";
import ReactDOM from "react-dom";

class Layout extends React.Component {

	constructor(){
		super();
		this.name = 'mayanksss'
	}

	render(){

		const name = 'mayank'
		return(

			<h1>It's {this.name}</h1>

		);
	}

}


const app = document.getElementById('app');
ReactDOM.render(<Layout/>, app);
