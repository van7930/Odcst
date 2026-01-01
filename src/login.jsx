import { useState,useEffect } from 'react';
import { Eye, EyeOff} from 'lucide-react';
import {useNavigate} from 'react-router-dom';
import "./Login.css"
const accounts = [
  { email: 'admin@gmail.com', password: '123', role: 'admin', name: 'Admin User' },
  { email: 'mentor@gmail.com', password: '456', role: 'mentor', name: 'Mentor User' },
  { email: 'talent@gmail.com', password: '789', role: 'talent', name: 'Student User' },
];
export default function Login(){
    const [email, setEmail] =useState('');
    const [phone, setPhone] =useState('');
    const [password, setPassword] =useState('');
    const [showPassword, setShowPassword] =useState(false);
    const [error,setError]=useState('');
    const navigate = useNavigate();
    useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      const user = JSON.parse(userData);
      if (user.role === 'admin') {
        navigate('/admin', { replace: true });
      } else if (user.role === 'mentor') {
        navigate('/mentor', { replace: true });
      } else {
        navigate('/dashboard', { replace: true });
      }
    }
    }, [navigate]);
    const handleSubmit =(e) =>{
        e.preventDefault();
        setError('');
        const account=accounts.find(
            acc=>acc.email===email && acc.password === password
        )
        if (!account) {
            setError('Invalid email or password!');
            return;
        }
        localStorage.setItem('user', JSON.stringify(account));
        if (account.role === 'admin') {
            navigate('/admin', { replace: true });
        } else if (account.role === 'mentor') {
            navigate('/mentor', { replace: true });
        } else if(account.role === 'talent'){
            navigate('/talent', { replace: true });
        }
    };

    return(     
        <div className="login-container">
            <div className="login-card">
                <div className="login-header">
                    <h1 className="title">
                        LabOdc
                    </h1>
                </div>
                {error && <div className="error-message">{error}</div>}
                <div onSubmit={handleSubmit} className="login-form">
                    <div className="form">
                        <label htmlfor="email" className="label-form">
                            Your email address or phone number
                        </label>
                        <div className="input-wrapper">
                            <input
                            type ="text"
                            id="email,phone"
                            placeholder="email or phone number"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="form-input"
                            />
                        </div>
                    </div>
                    <div className="form">
                        <label htmlfor="password" className="label-form">
                            Your password
                        </label>
                        <div className="input-wrapper">
                            <input
                            type={showPassword ? 'text' : 'password'}
                            id="password"
                            placeholder="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="form-input password-input"
                            />
                            <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="show"
                            >
                                {showPassword ? <EyeOff className="icon" /> : <Eye className="icon" />}
                            </button>
                        </div>
                    </div>
                    <div className="options">
                        <a href="#" className="forgot">
                            Forgot password?
                        </a>
                    </div>
                    <button className="submit">
                        Login
                    </button>
                </div>
            </div>
        </div>
    );
}

