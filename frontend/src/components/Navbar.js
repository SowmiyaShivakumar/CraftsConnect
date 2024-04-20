import { Link } from "react-router-dom"
import { useLogout } from "../hooks/useLogout"
import { useAuthContext } from "../hooks/useAuthContext"

export default function Navbar(){

    const { logout } = useLogout()
    const { user } = useAuthContext()

    const handleLogout = () => {
        logout()
    }

    return (
        <header>
            <div className="navbar">
                <Link to='/'>
                    <h2>Crafts Connect</h2>
                </Link>
                <nav>
                    {user && (
                        <div>
                            <span>Hello, {user.username}</span>
                            {user.userType==='artisan' && <Link to='/upload' >Upload</Link>}
                            <Link to='/'>Home</Link>
                            <button onClick={handleLogout}>Logout</button>
                        </div>
                    )}
                    {!user && (
                        <div>
                            <Link to='/login' >Login</Link>
                            <Link to='/signup' >Signup</Link>
                        </div>
                    )}
                </nav>
            </div>
        </header>
    )
}