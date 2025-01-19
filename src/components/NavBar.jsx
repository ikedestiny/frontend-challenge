import { useNavigate } from 'react-router-dom';
import '../style/Navbar.css'
export default function Navbar() {
    const navigate = useNavigate()
    const handleClick = (e, link) => {
        e.preventDefault();
        navigate(link);
    };
    return (
        <div className="navbar">
            <button className="nav-link active" onClick={(e) => handleClick(e, "/frontend-challenge/")}>все котики</button>
            <button className="nav-link active" onClick={(e) => handleClick(e, "/frontend-challenge/favorites")}>Любимые котики</button>
        </div>
    )
}