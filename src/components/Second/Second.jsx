import { Link } from "react-router-dom"
import "./Second.css";


export default function Second(props) {

  return(

      <>
      
         <div  className="container-second">
          <div className="text">
                <h1>{props.titlex}</h1>
                <p>
                  {props.text}
                    
                </p>
          </div>
          <div className="img"> 
                <img src="https://www.ck-rekrea.cz/katalogy-data/images/atrakce/652/uhersky-brod.jpg" alt="" />
          </div>
         </div>
      </>
  )
}