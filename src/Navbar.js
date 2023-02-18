const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>MCI Blog</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create" style={{
                    color: "white",
                    backgroundColor: "#088F8F",
                    borderRadius: "8px"
                }}>New Blog</a>
            </div>
        </nav>
    );
}

export default Navbar;