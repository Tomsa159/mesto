import { BrowserRouter, Routes, Route  } from "react-router-dom";
import Home from "./Home/Home";
import About from "./About/About";
import Aktuality from "./Aktuality/Akuality";
import Kult from "./Kult/Kult";
import Contact from "./Contact/Contact";

export default function AppRoutes() {
    return(

        <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/Aktuality" element={<Aktuality/>}/>
                <Route path="/kult" element={<Kult/>}/>
                <Route path="/contact" element={<Contact/>}/>
            </Routes>
        </BrowserRouter>
        </>
    )
}