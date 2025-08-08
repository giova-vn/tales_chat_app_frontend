import Logo from "../assets/tales_icon.svg";

function Header({}) {
    return (
        <nav className="row header">
            <div className="row">
                <img src={Logo}/>
                <h1>Tales</h1>
            </div>

            <button className="signOutBtn">Sign out</button>
        </nav>
    )
}

export default Header;