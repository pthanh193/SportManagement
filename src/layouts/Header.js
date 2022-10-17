import {Link} from 'react-router-dom'

const Header = () => {
    return(
        <nav className="navbar">
            <Link to="/"><h1>Logo</h1></Link>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/tour/create">Create Tournament</Link>
                <Link to="/tours">Find Tournaments</Link>
                <Link to="/team/create">Create Team</Link>
                <Link to="/teams">Find Teams</Link>
                <Link to="/login">Login</Link>
                <Link to="/register"><button className="btn btn-primary">Register</button></Link>
            </div>
        </nav>
    )
}
export default Header