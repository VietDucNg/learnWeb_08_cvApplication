import Logo from "./Logo";
import ExportBtn from "./ExportBtn";
import '../styles/Header.css'

function Header() {
    return (
    <div className="header flex-row">
        <Logo />
        <ExportBtn />
    </div>
    )
}

export default Header;