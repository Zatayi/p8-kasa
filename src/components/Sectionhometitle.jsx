import "./Sectionhometitle.scss"
import paysage from "../assets/image/Mask Group.png";

const Sectiontitle = () => {
    return (
        <div className='sectiontitle'>  
         <h1>Chez vous, partout et ailleurs</h1>         
            <img className='paysage' src={paysage} alt="paysage"/>
            
        </div>    
    )
}


export default Sectiontitle