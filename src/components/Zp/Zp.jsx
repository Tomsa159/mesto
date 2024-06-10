import "./Zp.css";

export default function Zp(props) {
    return(

        <>
       <h1>{props.zptt}</h1>
           <div className="zp-container">
                <div className="zp-contant">
                        <h3>{props.zptitle1}</h3>
                        <p>datum:{props.zpdate1} Autor:{props.zporg1}</p>
                </div>
                <div className="zp-contant">
                        <h3>{props.zptitle2}</h3>
                        <p>datum:{props.zpdate2} Autor:{props.zporg2}</p>
                </div>
                <div className="zp-contant">
                        <h3>{props.zptitle3}</h3>
                        <p>datum:{props.zpdate3} Autor:{props.zporg3}</p>
                </div>
                <div className="zp-contant">
                        <h3>{props.zptitle4}</h3>
                        <p>datum:{props.zpdate4} Autor:{props.zporg4}</p>
                </div>
           </div>
        </>
    )
}