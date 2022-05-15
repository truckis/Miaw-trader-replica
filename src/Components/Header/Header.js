import './Header.css'

const Header = () => {
    return (
        <>
            <nav className='nav-container'>
                <h2>🙀 Miaw Trader</h2>
                <ul>
                 <li><a href="/">LP Tower</a></li>
                 <li><a href="/">Say Miaw</a></li>
                 <li><a href="/">Miaw Paper</a></li>
                </ul>
                <h5>Connect Wallet 💸 </h5>
            </nav>
        </>
    )
}

export default Header;