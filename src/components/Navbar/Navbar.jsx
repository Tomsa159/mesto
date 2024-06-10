import { Link } from "react-router-dom"
import "./Navbar.css";
export default function Home() {

  return(

      <>
      <div className="bg">
         <div className="header">
          <div className="logo">
          <Link to="/"><h3>Uherský brod</h3></Link>
          </div>
            <div className="navbar">
              
              <Link to="/about"><h3>O MĚSTĚ</h3></Link>
              <Link to="/Aktuality"><h3>AKTUALITY</h3></Link>
              <Link to="/kult"><h3>KULTURNÍ AKCE</h3></Link>
              <Link to="/contact"><h3>KONTAKTY</h3></Link>
              <Link to="/" className="src"><h3>HLEDAT</h3></Link>
            </div>
            <div className="inside-l">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Znak_m%C4%9Bsta_Uhersk%C3%BD_Brod.svg/1850px-Znak_m%C4%9Bsta_Uhersk%C3%BD_Brod.svg.png" alt="" />
                  <h1>UHERSKÝ BROD</h1>
                  <h2 className="opa">Official website</h2>
            </div>

         </div>
         </div>
         
      </>
  )
}