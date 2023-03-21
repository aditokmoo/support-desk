import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { BackBtn } from '../components/BackBtn';
import { createTicket, reset } from '../features/tickets/ticketSlice';
// CSS
import './css/newTicket.css';

export const NewTicket = () => {
	const { user } = useSelector((state) => state.auth);
	const { isLoading, isError, isSuccess, message } = useSelector((state) => state.tickets)
	const [ name, setName ] = useState(user.name);
	const [ email, setEmail ] = useState(user.email);
	const [ product, setProduct ] = useState('');
	const [ description, setDescription ] = useState('');
	
	const dispatch = useDispatch();
	const navigate = useNavigate();

	useEffect(() => {
		if(isError) {
			toast.error(message)
		}

		if(isSuccess) {
			dispatch(reset());
		}

		dispatch(reset())
	}, [isError, isSuccess, dispatch, message])

	const handleSubmit = (e) => {
		e.preventDefault();
		
		dispatch(createTicket({product, description}))

		navigate('/tickets')
	}

	return (
		<>
			<BackBtn url='/' />
			<div className="ticket-form">
				<div className="ticket-form-section">
					<h1>Create New Ticket</h1>
					<p>Please fill out the form below</p>
					<div className="input-container">
						<label htmlFor="name">Customer Name</label>
						<input type="text" value={name} disabled />
					</div>
					<div className="input-container">
						<label htmlFor="email">Customer Email</label>
						<input type="email" value={email} disabled />
					</div>
					<form onSubmit={handleSubmit}>
						<div className="input-container">
							<label htmlFor="product">Product</label>
							<select id="product" name='product' value={product} onChange={(e) => setProduct(e.target.value)}>
								<option value="iPhone">iPhone</option>
								<option value="Macbook Pro">Macbook Pro</option>
								<option value="iMac">iMac</option>
								<option value="iPad">iPad</option>
							</select>
						</div>
						<div className="input-container">
							<label htmlFor="description">Description of the issue</label>
							<textarea name="description" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
						</div>
						<div className="input-container">
							<button>Add Ticket</button>
						</div>
					</form>
				</div>
			</div>
		</>
	);
};
