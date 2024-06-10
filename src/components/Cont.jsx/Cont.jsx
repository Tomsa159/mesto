import { Link } from "react-router-dom"
import "./Cont.css";
export default function Cont() {

  return(

      <>
       <h1>Kontaktní informace</h1>
        <div className="cont-conteiner">
       
            <div className="cont-tent">
                
            <ul>
                    <li><h3>Masarykovo nám. 100</h3></li>
                    <li><h3>688 01  UHERSKÝ BROD</h3></li>
                    <li><h3>Zavolojte nám: +420 572 805 111</h3></li>
                    <li><h3>ID datové schránky: e3kbzf6</h3></li>
                    <li><h3>IČ: 00291463</h3></li>
                    <li><h3>Sledujte nás na facebooku nebo na youtubovém kanále</h3></li>
                   
                </ul>
                    
            </div>
            <p></p>
            <div className="cont-tent">
                <ul>
                    <li><h3>Pracovní doba pro veřejnost</h3></li>
                    <li><h3>PO/ST: 08:00–17:00</h3></li>
                    <li><h3>ÚT/ČT: 08:00–14:30 </h3></li>
                    <li><h3>PÁ: 08:00–14:00</h3></li>
                    <li><h3>Pracoviště umístěná v budově MěÚ, Masarykovo nám. 136 (Kachlíkárna) jsou každý čtvrtek pro veřejnost uzavřena</h3></li>
                </ul>
            </div>
        </div>
        <div className="odstavec">
            <p>   
        Upozornění: <br/>
        Pracoviště vykonávající státní správu (jedná se o pracoviště umístěná v budově MěÚ, Masarykovo nám. 136) jsou každý čtvrtek pro veřejnost uzavřena.
        V pracovní době Městského úřadu Uherský Brod musí být na všech organizačních jednotkách úřadu zajištěno vyřizování záležitostí občanů a firem,
        v úřední době (pondělí a středa) i v době přestávky na jídlo a oddech.
        </p>

        <p> Pracoviště podatelny, matriky, výdeje občanských průkazů a cestovních dokladů, CzechPOINTu, evidence motorových vozide
            l a evidence řidičů musí v pracovní době Městského úřadu Uherský Brod zajistit vyřizování ústních a písemných podání občanů a firem v rámci své agendy každodenně včetně přestávky na jídlo a oddech.
        </p>
        
        <p> Přestávka na jídlo a oddech je stanovena na 30 minut a zaměstnanec ji může čerpat kdykoliv v době od 11:00 do 13:00 hodiny.
        Mimo úřední dobu musí občané počítat s tím, že nemusí své záležitosti vyřídit, poněvadž zaměstnanci Městského úřadu Uherský Brod mohou provádět místní šetření mimo úřad nebo vyřizují jinou agendu.
        Termín jednání je možné sjednat předem telefonicky, e-mailem nebo prostřednictvím rezervačního systému.
        V opodstatněných případech je možné rovněž sjednat termín jednání mimo pracovní dobu s dostatečným předstihem telefonicky nebo e-mailem.
        </p>

        </div>
      </>
  )
}