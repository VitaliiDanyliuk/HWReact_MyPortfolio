import { NavLink } from "react-router-dom";
import BtnDarkMode from "../BtnDarkMode";
import "./nav.css"


const Nav = () => {

    const activeLink = "nav-list__link nav-list__link--active";
    const normaleLink = "nav-list__link";

    return ( 
    <nav className="nav">
        <div className="container">
                <div className="nav-row">
                    <NavLink to="/" className="logo">
                        <strong>Portfolio</strong> 
                        
                    </NavLink>
                    <BtnDarkMode />
                    
                <ul className="nav-list">
                        <li className="nav-list__item">
                            <NavLink to="/" className={({ isActive }) => isActive ? activeLink : normaleLink}>Home</NavLink>
                        </li>
                        <li className="nav-list__item">
                            <NavLink to="/projects" className={({ isActive }) => isActive ? activeLink : normaleLink}>Projects</NavLink>
                        </li>
                        <li className="nav-list__item">
                            <NavLink to="/contacts" className={({ isActive }) => isActive ? activeLink : normaleLink}>Contacts</NavLink>
                        </li>
                </ul>
            </div>
        </div>
    </nav>
     );
}
 
export default Nav;