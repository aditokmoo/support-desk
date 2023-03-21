import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import { useSelector, useDispatch } from 'react-redux';
import { register, reset } from '../features/auth/authSlice';
//CSS
import './css/form.css'

export const Register = () => {
    const [ formData, setFormData ] = useState({
        name: '',
        email: '',
        password: '',
        confirm_password: ''
    })

    const { name, email, password, confirm_password } = formData;

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth)

    useEffect(() => {
        if(isError) {
            toast.error(message)
        }

        if(isSuccess || user) {
            navigate('/')
        }

        dispatch(reset());

    }, [isError, isSuccess, user, message, navigate, dispatch])

    const handleChange = (e) => {
        setFormData(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(password !== confirm_password) {
            toast.error('Password do not match')
        } else {
            const userData = {
                name,
                email,
                password
            }

            dispatch(register(userData));
        }
    }

    return(
        <div className="form-section">
            <section className="header">
                <h1>Register</h1>
                <p>Please create an account</p>
            </section>

            <section className="form">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input type="text" name='name' className="form-control" id="name" value={name} onChange={handleChange} placeholder='Enter your name' required/>
                    </div>
                    <div className="form-group">
                        <input type="email" name='email' className="form-control" id="email" value={email} onChange={handleChange} placeholder='Enter your email' required/>
                    </div>
                    <div className="form-group">
                        <input type="password" name='password' className="form-control" id="password" value={password} onChange={handleChange} placeholder='Enter you password' required/>
                    </div>
                    <div className="form-group">
                        <input type="password" name='confirm_password' className="form-control" id="confirm_password" value={confirm_password} onChange={handleChange} placeholder='Confirm your password' required/>
                    </div>
                    <div className="form-group">
                        <button className="btn">Submit</button>
                    </div>
                </form>
            </section>
        </div>
    )
}