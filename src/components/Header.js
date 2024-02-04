import '../style.css'

const Header = () => {

    return(
        <>
        <div>
           <nav>
            <div>
            <img src ='/brand_logo.png' alt='logo'/>
            </div>
            <ul>
                <li>Home</li>
                <li>Location</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <button>Login</button>
           </nav>
        </div>

        </>
    );
}

export default Header;