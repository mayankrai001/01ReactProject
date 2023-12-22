const Header = () => {
    return (
        <nav className="flex flex-row justify-between mw-1280rem m-auto h-72rem items-center mx-10">
            <div className="logo"><img src="/images/brand_logo.png" alt="nike logo"/></div>
            <ul className="flex flex-row gap-24 font-medium" >
                <li href="#">Menu</li>
                <li href="#">Location</li>
                <li href="#">About</li>
                <li href="#">Contact</li>
            </ul>
            <button className='p-2 bg-red-400 rounded-lg font-medium'>Login</button>
        </nav>
    )
}

export default Header;