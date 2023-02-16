import { useState } from 'react';
// css
import './css/form.css';

export const Login = () => {
	const [ formData, setFormData ] = useState({
		email: '',
		password: ''
	});

	const { email, password } = formData;

	const handleChange = (e) => {
		setFormData((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
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
