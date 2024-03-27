import './Navbar.css';

function Navbar() {
    return (
        <nav>
            <ul>
                <li className='active'><a href="#">Página Inicial</a></li>
                <li><a href="#">Sobre nós</a></li>
                <li><a href="#">Contrate</a></li>
            </ul>
        </nav>
    )
}

export default Navbar