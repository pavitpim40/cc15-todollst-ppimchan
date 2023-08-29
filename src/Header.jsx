import './Header.scss';
import { FaHome } from 'react-icons/fa';

function Header() {
    return (
        <header className='header'>
            <div className='header__logo'>
                <FaHome />
            </div>
            <div className='header__text'>
                <h1>TodoList</h1>
            </div>
            <div className='header__search'>
                <input />
            </div>
        </header>
    );
}

export default Header;
