import logoKasa from "../assets/image/LOGO.png";
import { Link } from "react-router-dom";


const Header = () => {
    return (
        <div className='header'>
            <img className='logoheader' src={logoKasa} alt="logo kasa" />
            <nav>
                <Link to="/" activeClassName="active">Accueil</Link>
                <Link to="/about" activeClassName="active">A Propos</Link>
            </nav>
        </div>
    )
}


export default Header