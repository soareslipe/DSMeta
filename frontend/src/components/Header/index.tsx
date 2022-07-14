import icon from '../../assets/img/logo.svg'
import './styles.css'

function Header() {
    return (
        <header>
            <div className="dsmeta-logo-container">
                <img src={icon} alt="DSMeta" />
                <h1>DSMeta</h1>
                <p>Desenvolvido por <a href="https://github.com/soareslipe">Fellipe Azevedo</a></p>
            </div>
        </header>
    )
}

export default Header