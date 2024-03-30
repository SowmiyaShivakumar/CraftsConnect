import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from 'axios'
export default function Login(){

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [error,setError] = useState(null)
    const navigate = useNavigate()

    function handleSubmit(event){
        event.preventDefault()
        axios.post('http://localhost:4000/login' , {email,password})
            .then(result => {
                if(result.data === "Logged in"){
                    setEmail('')
                    setPassword('')
                    setError('')
                    navigate('/home')
                }
                else if(result.data === "Incorrect Password"){
                    setPassword('')
                    setError(result.data)
                }
                else{
                    setError(result.data)
                }
            })
            .catch(error => {
                setError(error.message)
            })
    }

    return (
        <div className="login-page">
            <form onSubmit={handleSubmit}>
                <label>Email : </label>
                <input
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />
                <label>Password : </label>
                <input
                    type="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />
                <button>Login</button>
            </form>
            {error && <div className="error">{error}</div>}
        </div>
    )
}