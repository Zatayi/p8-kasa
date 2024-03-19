import logoKasa from "../assets/image/LOGO.png";
import { NavLink } from "react-router-dom";


const Header = () => {
    return (
        <div className='header'>
            <img className='logoheader' src={logoKasa} alt="logo kasa" />
            <nav>
                <NavLink to="/">Accueil</NavLink>
                <NavLink to="/about">A propos</NavLink>
            </nav>
        </div>
    )
}


export default Header