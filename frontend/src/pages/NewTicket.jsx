import { useState } from 'react';
import { useSelector } from 'react-redux';
// CSS
import './css/newTicket.css';

export const NewTicket = () => {
	const { user } = useSelector((state) => state.auth);
	const [ name, setName ] = useState(user.name);
	const [ email, setEmail ] = useState(user.email);
	const [ product, setProduct ] = useState('');
	const [ description, setDescription ] = useState('');

	return (
		<div className="ticket-form">
			<div className="ticket-form-section">
				<h1>Create New Ticket</h1>
				<p>Please fill out the form below</p>
				<form>
					<div className="input-container">
						<label htmlFor="name">Customer Name</label>
						<input type="text" value={name} disabled />
					</div>
					<div className="input-container">
						<label htmlFor="name">Customer Email</label>
						<input type="email" value={email} disabled />
					</div>
					<div className="input-container">
						<label htmlFor="name">Product</label>
						<select id="product">
							<option value="iPhone">iPhone</option>
							<option value="Macbook Pro">Macbook Pro</option>
							<option value="iMac">iMac</option>
							<option value="iPad">iPad</option>
						</select>
					</div>
					<div className="input-container">
						<label htmlFor="description">Description of the issue</label>
						<textarea name="description" placeholder="Description" />
					</div>
                    <div className="input-container">
                        <button>Add Ticket</button>
                    </div>
				</form>
			</div>
		</div>
	);
};
