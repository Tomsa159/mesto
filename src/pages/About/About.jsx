
import Navbar from "../../components/Navbar/Navbar"
import Footer from "../../components/Footer/Footer"
import Second from "../../components/Second/Second"
import Ab from "../../components/Ab/Ab"
export default function About() {
    return(

        <>
        <Navbar />
        <Second 
        titlex="O MĚSTĚ" 
        text="Uherský Brod, ležící v kraji Zlínském, je městem s bohatou historií a kulturním dědictvím.
            Jeho hlavními symboly jsou Česká zbrojovka, renesanční zámek a kostel sv. Martina.
            Zbrojovka je významným výrobcem palných zbraní s dlouhou tradicí. Zámek, dominanta města, a kostel sv. Martina, jsou historické památky, které přitahují turisty.
            Okolní příroda nabízí možnosti k rekreaci, od procházek podél řeky Moravy až po návštěvu místních vinic.
            Uherský Brod spojuje historii s modernitou, což ho činí atraktivním cílem pro turisty i obyvatele."/>

        <Ab/>
        
           <Footer/>
        </>
    )
}