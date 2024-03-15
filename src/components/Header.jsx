import "./Header.scss"
import logoKasa from "../assets/image/LOGO.png";
//import { NavLink } from "react-router-dom";


const Header = () => {
    return (
        <div className='header'>            
            <img className='logoheader' src={logoKasa} alt="logo kasa"/>
            <nav>
                <ul>
                    
                    <li>Accueil</li>
                    <li>A Propos</li>
                    
                    
                </ul>
            </nav>
        </div>    
    )
}


export default Header