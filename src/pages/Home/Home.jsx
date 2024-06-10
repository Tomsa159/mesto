import { useEffect } from "react"
import React from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import First from "../../components/First/First.jsx";
import Second from "../../components/Second/Second.jsx";
import Kultbar from "../../components/Kultbar/Kultbar.jsx";
import Third from "../../components/Third/Third.jsx";
export default function Home() {
    useEffect(() => {
        document.title = "Nějakej Uherskej Brod"
      }, [])
    return(

        <>
         <div className="App"></div>
        <Navbar/>
        <Second 
        titlex="O MĚSTĚ" 
        text="Uherský Brod, ležící v kraji Zlínském, je městem s bohatou historií a kulturním dědictvím.
            Jeho hlavními symboly jsou Česká zbrojovka, renesanční zámek a kostel sv. Martina.
            Zbrojovka je významným výrobcem palných zbraní s dlouhou tradicí. Zámek, dominanta města, a kostel sv. Martina, jsou historické památky, které přitahují turisty.
            Okolní příroda nabízí možnosti k rekreaci, od procházek podél řeky Moravy až po návštěvu místních vinic.
            Uherský Brod spojuje historii s modernitou, což ho činí atraktivním cílem pro turisty i obyvatele."/>

       <First name="AKTUALITY"
        
        titleone="VÝBĚROVÉ ŘÍZENÍ NA OBSAZENÍ PRACOVNÍ POZICE - ZÁSTUPCE ŘEDITELE"

        titletwo="VÝBĚROVÉ ŘÍZENÍ NA OBSAZENÍ PRACOVNÍ POZICE MZDOVÁ/Ý ÚČETNÍ"

        titlethree="PRACOVNÍ MÍSTA U TSUB, PŘÍSPĚVKOVÁ ORGANIZACE"

        titlefour="PROVOZ MATEŘSKÝCH ŠKOL V UHERSKÉM BRODĚ V OBDOBÍ LETNÍCH PRÁZDNIN 2024"

        />
        
       <Kultbar name="KULTURNÍ AKCE "

        titleone="Inge Kosková, Jan Naš - Obrazy a plastiky"

        titletwo="Jiří Suchý- Grafiky"

        titlethree="Řemeslo ve službách umění"

        titlefour="Gala koncert"
       />
       <Third
       thirdtt="Další informace"
       title1="Kino"
       title2="Stromy pod kontrolou"
       title3="edeska"
       title4="Městský rozpočet"
       title5="Knihovna"
       />
       
       <Footer/>
       </>
    )
}