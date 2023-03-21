import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login, reset } from '../features/auth/authSlice';
import { toast } from 'react-toastify';
// css
import './css/form.css';

export const Login = () => {
	const [ formData, setFormData ] = useState({
		email: '',
		password: ''
	});

	const { email, password } = formData;

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth);

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
		setFormData((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		const userData = {
			email,
			password
		}

		dispatch(login(userData))

	};

	return (
		<div className="form-section">
			<section className="header">
				<h1>Login</h1>
				<p>Please login to get support</p>
			</section>

			<section className="form">
				<form onSubmit={handleSubmit}>
					<div className="form-group">
						<input
							type="email"
							name="email"
							className="form-control"
							id="email"
							value={email}
							onChange={handleChange}
							placeholder="Enter your email"
							required
						/>
					</div>
					<div className="form-group">
						<input
							type="password"
							name="password"
							className="form-control"
							id="password"
							value={password}
							onChange={handleChange}
							placeholder="Enter you password"
							required
						/>
					</div>
					<div className="form-group">
						<button className="btn">Submit</button>
					</div>
				</form>
			</section>
		</div>
	);
};
