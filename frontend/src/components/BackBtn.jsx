import { FaArrowCircleLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './css/backBtn.css'

export const BackBtn = ({ url }) => {
    return (
        <Link to={url} className='back-btn'>
            <FaArrowCircleLeft /> Back
        </Link>
    )
}