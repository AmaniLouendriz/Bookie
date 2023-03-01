import { NavBar } from "../Components/NavBar"
import '../style/Home.css'
import {Link} from 'react-router-dom'

export const Home = () =>{

    return(
        <div>
        <NavBar/>
        <section className="section">

            <h1 className="sectionTitle">Looking for the perfect friend during your next summer holidays ?</h1>
            <h3 className="sectionTitle"> We have you covered !</h3>
            <p className="sectionCenter"> Bookie is an online platform that gives you summaries of many novels from different kinds. So, before
            you plan on choosing your next one, make sure to give us a shot !</p>
            <Link to='books' className='button'>Find your partner.</Link>




        </section>




        </div>












    )



}