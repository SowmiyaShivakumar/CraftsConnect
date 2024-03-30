import { useState } from "react"
import { Link , useNavigate } from "react-router-dom"
import axios from 'axios'

export default function SignUp(){

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [username,setUsername] = useState('')
    const [error,setError] = useState(null)
    const navigate = useNavigate()

    function handleSubmit(event){
        event.preventDefault()
        axios.post('http://localhost:4000/' , {username,email,password})
            .then(result => {
                if(result.data === "Exists"){
                    setError("User already exists.. Try Logging in")
                }
                else{
                    setError('')
                    navigate('/login')
                }
                setEmail('')
                setPassword('')
                setUsername('')
            })
            .catch(error => {
                setError(error.message)
            })
    }

    return (
        <div className="signup-page">
            <div className="full">
            <div className="content">
                <h3>Welcome</h3>
            </div>
            <div className="form-box-signup">
                <h1>CraftsConnect</h1>
                <h2>Welcome to CraftsConnect</h2>
                <h3>Register</h3>
            <form onSubmit={handleSubmit}>
                <div className="input-box">
                    <input
                        type="text"
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                        required = "required"
                    />
                    <label>Username</label>
                </div>
                <div className="input-box"> 
                    <input
                        type="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        required = "required"
                    />
                    <label>Email</label>
                </div>
                <div className="input-box">
                    <input
                        type="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        required = "required"
                   />
                    <label>Password</label>
                </div>
                <button className="btn" id="register">SignUp</button>
                {error && <div className="error">{error}</div>}
            <p className="reg_user">Already an user? <Link to='/login'><strong>Login</strong></Link></p>
            </form>
            </div>
            </div>
        </div>
    )
}