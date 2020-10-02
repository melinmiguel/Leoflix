import React from 'react';
//import Logo from '../../assets/img/Logo_Leoflix.png'
import Logo from '../../assets/img/Logo_Quelflix.png'
import ButtonLink from '../Menu/Components/ButtonLink';
import './Menu.css'
import Button from '../Button'

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt=" Leoflix logo" />
            </a>

            <Button as="a" className="ButtonLink" href="/">
                Novo Video!
            </Button>
        </nav>
    );
}
export default Menu;