import { Link } from "react-router-dom"
import "./Third.css";
import React from "react";
export default function Third(props) {

  return(

      <>
      <div className="bgc">
      <div className="title">
            <h1>{props.thirdtt}</h1>
        </div>
      
         <div className="container-third">


                <div className="contant-third">
                    <Link to={{ pathname: "/https://www.kino.ub.cz/" }}target="_blank"><h2><a href="">{props.title1} </a></h2></Link>
                </div>
                <div className="contant-third">
                    <Link to={{ pathname: "/https://www.stromypodkontrolou.cz/" }}target="_blank"><h2><a href="">{props.title2} </a></h2></Link>
                </div>
                <div className="contant-third">
                    <Link to={{ pathname: "/https://edeska.ub.cz/" }} target="_blank" ><h2><a href="">{props.title3} </a></h2></Link>
                </div>
                <div className="contant-third">
                    <Link to={{ pathname: "/https://rozpocet.ub.cz/cz/" }} target="_blank" ><h2><a href="">{props.title4} </a></h2></Link>
                </div>
                <div className="contant-third">
                    <Link to={{ pathname: "/https://knihovna.ub.cz/" }}target="_blank" ><h2><a href="">{props.title5} </a></h2></Link>
                </div>

            </div>

        </div>      
      </>
  )
}