import "./header.css"
import myFoto from "./foto.jpg"
const Header = () => {
    return (  
    <header className="header">
            <div className="header__wrapper">
            <div className="header__foto">
                 <img src={myFoto} alt="foto"/>   
            </div>
                
            <div className="header__title">
                 <strong>Hello, my name is</strong> <br/> <em>Vitalii Danyliuk</em>
                <div className="header__title_prof">Frontend developer</div>
                </div>
            <div className="header__objective">
                <h3 className="header__objective_title">OBJECTIVE</h3>
				<div className="header__objective_text">Obtain a position of Junior Frontend Developer to progress in the field of
					IT and grow up to Team Lead in 3 years.
				</div>
                </div>   
            {/* <a href="#!" className="btn">Download CV</a> */}
        </div>
    </header>        
    );
}
 
export default Header;