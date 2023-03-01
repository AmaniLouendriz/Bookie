import { Link } from "react-router-dom"
import './NavBar.css'



export const NavBar = ()=>{
    return(

        <nav className="nav">
            <Link className="logo" to='/'>#Bookie</Link>
            <Link className="tab" to='/about'>About</Link>
        </nav>



    )




}