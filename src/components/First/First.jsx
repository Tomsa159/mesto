import { Link } from "react-router-dom"
import "./First.css";

export default function First(props){
    return(
        <>
        <div className="bgc">
        <div className="title">
            <h1>{props.name}</h1>
        </div>
        <div className="container">

            <div className="content">
                <img src="https://www.raymondgeddes.com/cdn/shop/articles/best-classroom-size.jpg?v=1682075794" alt="" />
                <h3>{props.titleone}
                </h3>
                <Link to="/Aktuality"><a href="">více informací zde</a></Link>

            </div>

            <div className="content">
                <img src="https://i.pinimg.com/236x/71/0a/1a/710a1aa3f5e63a084889aade78d88699.jpg" alt="" />
                <h3>{props.titletwo}
                </h3>
                <Link to="/Aktuality"><a href="">více informací zde</a></Link>


            </div>

            <div className="content">
                <img src="https://loyalhygiene.com/wp-content/uploads/2020/03/clean-office-workspace.jpg" alt="" />
                <h3>{props.titlethree}</h3>
                <Link to="/Aktuality"><a href="">více informací zde</a></Link>


            </div>

            <div className="content">
                <img src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/589590/capsule_616x353.jpg?t=1713346624" alt="" />
                <h3>{props.titlefour}</h3>
                <Link to="/Aktuality"><a href="">více informací zde</a></Link>
                


            </div>
        </div>
        </div>

        </>
    )
}