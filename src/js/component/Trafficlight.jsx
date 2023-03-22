import React from "react";
import {useState} from "react";


const Trafficlight = () => {
    const  [semaforo, setSemaforo] = useState("");
  
    

    
    return(
        <>
        <div className="body">
           <div className="barra"></div>
             <div className="trafficlight row ">
			 <div className={`light red${ semaforo == "red" ? " glow" : ""}`}onClick={()=> setSemaforo("red")}></div>
	         <div className={`light yellow${ semaforo == "yellow" ? " glow" : ""}`}onClick={()=> setSemaforo("yellow")}></div>
			 <div className={`light green${ semaforo == "green" ? " glow" : ""}`}onClick={()=> setSemaforo("green")}></div>
            
            </div>
           
        </div>
        </>
    )
}
export default Trafficlight;