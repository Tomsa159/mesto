
import "./Kult.css";
import Navbar from "../../components/Navbar/Navbar.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import Kultbar from "../../components/Kultbar/Kultbar.jsx";



export default function Kult() {
    return(

        <>
            <Navbar/>
            <Kultbar name="KULTURNÍ AKCE "

            titleone="Inge Kosková, Jan Naš - Obrazy a plastiky"

            titletwo="Jiří Suchý- Grafiky"

            titlethree="Řemeslo ve službách umění"

            titlefour="Gala koncert"
       />
       <h2 className="gg">Omlouváme se ale žádný další program není, protože to stejně nikoho v tomhle městě nezajímá. :c</h2>
            <Footer/>
        </>
    )
}