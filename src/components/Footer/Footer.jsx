import { Link } from "react-router-dom"
import "./Footer.css";
export default function Footer(){

    return(
        <>
        <div className="footer">

          

            <div className="logo-footer">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Znak_m%C4%9Bsta_Uhersk%C3%BD_Brod.svg/1850px-Znak_m%C4%9Bsta_Uhersk%C3%BD_Brod.svg.png" alt="byl jsem zde" />
              

            </div>

            <div className="mapa">
              <iframe src="https://frame.mapy.cz/s/cevehuzuhu"></iframe>
            </div>

          <div className="footnavbar">
              <ul>
               <li><h3><Link to="/Aktuality">Aktuality</Link></h3></li>
               <li><Link to="/Aktuality"><p>Pracovní místa</p></Link></li>
               <li><Link to="/Aktuality"><p>Provoz mateřských škol</p></Link></li>
               <li><Link to="/Aktuality"><p>Výběrové řízení</p></Link></li>
              </ul>
              <ul>
               <li><h3><Link to="/Kult">Kulturní akce</Link></h3></li>
               <li><Link to="/Kult"><p>Obrazy a plasatiky</p></Link></li>
               <li><Link to="/Kult"><p>Grafiky</p></Link></li>
               <li><Link to="/Kult"><p>Řemeslo ve službách umění</p></Link></li>
              </ul>
              <ul>
               <li><h3><Link to="/About">Informace</Link></h3></li>
               <li><Link to="/About"><p>Doprava</p></Link></li>
               <li><Link to="/About"><p>Školství</p></Link></li>
               <li><Link to="/About"><p>Pravidla</p></Link></li>
              </ul>

            <div>
              <h4>Pokud máte dotaz klikněte <Link to="/Contact">zde</Link> </h4>

            </div>

            <div>
              <h5>Vytvořil Tomšíček, Ulrich, Vuong</h5>

            </div>

          </div>
           
        </div>
        
        </>
    )
}