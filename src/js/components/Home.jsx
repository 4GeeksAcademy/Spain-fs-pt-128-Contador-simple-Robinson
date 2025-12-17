import React from "react";
import { Digito } from "./Digito";
import { FaRegClock } from "react-icons/fa";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";


//create your first component
const Home = ({ count }) => {
	return (
		<div className="row container-fluid">
			<div className="clock bg-dark text-white p-3 m-2"><FaRegClock /></div>
		
			<Digito contador={Math.floor(count / 10000) % 10}  />
			<Digito contador={Math.floor(count / 1000) % 10}  />
			<Digito contador={Math.floor(count / 100) % 10}  />
			<Digito contador={Math.floor(count / 10) % 10} />
			<Digito contador={Math.floor(count % 10)} />
		</div>
		
	);
};

export default Home;