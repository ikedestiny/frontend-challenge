import { useNavigate } from 'react-router-dom';
import '../style/Navbar.css';

export default function Navbar() {
    const navigate = useNavigate();

    const handleClick = (path) => {
        navigate(path);
    };

    return (
        <div className="navbar">
            <button
                className="nav-link"
                onClick={() => handleClick("/")}
            >
                Все котики
            </button>
            <button
                className="nav-link"
                onClick={() => handleClick("/favorites")}
            >
                Любимые котики
            </button>
        </div>
    );
}
