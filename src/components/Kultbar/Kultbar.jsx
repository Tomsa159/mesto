import { Link } from "react-router-dom"
import "./Kultbar.css";

export default function Kultbar(props){
    return(
        <>
        <div className="title">
            <h1>{props.name}</h1>
        </div>
        <div className="container">

            <div className="content">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAZ04EbRWqUySRf0OWXdQu9AFSn3HXGF9CoA&s" alt="" />
                <h3>{props.titleone}
                </h3>
                <Link to="/Aktuality"><a href="">více informací zde</a></Link>

            </div>

            <div className="content">
                <img src="https://storage.cinemaware.eu/katalogy/images/8/e/8e238d9a-fd44-11ee-9bbd-9e966f951e90.jpg" alt="" />
                <h3>{props.titletwo}
                </h3>
                <Link to="/Aktuality"><a href="">více informací zde</a></Link>


            </div>

            <div className="content">
                <img src="https://www.cojevbrode.cz/files/event/4177/thumb/remeslo.jpg" alt="" />
                <h3>{props.titlethree}</h3>
                <Link to="/Aktuality"><a href="">více informací zde</a></Link>


            </div>

            <div className="content">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa2ZPCIWIOwz2cHjhrVD1xOfwlK5Eo1bgLLQ&s" alt="" />
                <h3>{props.titlefour}</h3>
                <Link to="/Aktuality"><a href="">více informací zde</a></Link>
                


            </div>
        </div>

        </>
    )
}