import { Link } from "react-router-dom"
import "./Aktuality.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer.jsx";
import First from "../../components/First/First.jsx";
import Zp from "../../components/Zp/Zp.jsx";
export default function Aktuality() {
    return(

        <>
            <Navbar />
        <First name="ŽHAVÉ TÉMA"
        
        titleone="VÝBĚROVÉ ŘÍZENÍ NA OBSAZENÍ PRACOVNÍ POZICE - ZÁSTUPCE ŘEDITELE"

        titletwo="VÝBĚROVÉ ŘÍZENÍ NA OBSAZENÍ PRACOVNÍ POZICE MZDOVÁ/Ý ÚČETNÍ"

        titlethree="PRACOVNÍ MÍSTA U TSUB, PŘÍSPĚVKOVÁ ORGANIZACE"

        titlefour="PROVOZ MATEŘSKÝCH ŠKOL V UHERSKÉM BRODĚ V OBDOBÍ LETNÍCH PRÁZDNIN 2024"

        />
        <Zp zptt="MIMOŘÁDNÉ ZRÁVY"
           
            zptitle1=" PRACOVNÍ MÍSTO U TSUB, PRACOVNÍK ÚDRŽBY - ŘIDIČ SK. C "
            zpdate1="15.05.2024 "
            zporg1="TSUB p.o."

             zptitle2=" PROVOZ MATEŘSKÝCH ŠKOL V UHERSKÉM BRODĚ V OBDOBÍ LETNÍCH PRÁZDNIN 2024"
             zpdate2="25.01.2024 "
             zporg2="Elen Fremlová"

              zptitle3=" VÝBĚROVÉ ŘÍZENÍ NA OBSAZENÍ PRACOVNÍ POZICE REFERENT/KA ODDĚLENÍ DOPRAVNĚ SPRÁVNÍ ČINNOSTI A AGENDY, ODBORU SPRÁVNÍHO."
              zpdate3="07.06.2024"
              zporg3="Ing. Kateřina Grebíková "

               zptitle4="  VÝBĚROVÉ ŘÍZENÍ NA OBSAZENÍ PRACOVNÍ POZICE INFORMATIK."
               zpdate4="05.06.2024 "
               zporg4="Ing. Kateřina Grebíková "
        />
         <Zp
           
           zptitle1=" VÝBĚROVÉ ŘÍZENÍ NA OBSAZENÍ PRACOVNÍ POZICE REFERENT/KA ODDĚLENÍ INVESTIC, ODBORU ROZVOJE MĚSTA."
           zpdate1="05.06.2024"
           zporg1="Ing. Kateřina Grebíková "

            zptitle2="PRODLOUŽENÍ VÝBĚROVÉHO ŘÍZENÍ OBSAZENÍ PRACOVNÍ POZICE VEDOUCÍ ODBORU ROZVOJE MĚSTA."
            zpdate2="05.06.2024"
            zporg2="Ing. Kateřina Grebíková "

             zptitle3=" VÝBĚROVÉ ŘÍZENÍ NA OBSAZENÍ PRACOVNÍ POZICE ŘEDITEL/ŘEDITELKA ORGANIZACE DŮM KULTURY UHERSKÝ BROD, PŘÍSPĚVKOVÁ ORGANIZACE."
             zpdate3="04.06.2024"
             zporg3="Ing. Kateřina Grebíková "

              zptitle4="OBRAZOVÉ OHLÉDNUTÍ ZA BÍLOKARPATSKÝMI SLAVNOSTMI"
              zpdate4="10.06.2024"
              zporg4="Elen Sladká "
       />

           <Footer/>
        </>
    )
}