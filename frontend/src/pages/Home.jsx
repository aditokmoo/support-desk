import { Link } from 'react-router-dom';
// Icons
import { FaQuestionCircle, FaTicketAlt } from 'react-icons/fa'
// CSS
import './css/home.css'

export const Home = () => {
    return(
        <div className="home-section">
            <div className="container">
                <div className='section-container'>
                    <div className="section section-left">
                        <h2>What do you need help with</h2>
                        <p>Please choose from an option bellow</p>
                        <Link to='/new-ticket' className='btn btn-new-ticket'>
                            <FaQuestionCircle />
                            Create New Ticket
                        </Link>

                        <Link to='/tickets' className='btn btn-tickets'>
                            <FaTicketAlt />
                            View My Tickets
                        </Link>
                    </div>

                    <div className="section section-right">
                        <h1>Get tickets into the right hands in seconds</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A esse ab reiciendis, quibusdam ut quam eum eaque aliquam natus hic voluptatibus vitae, corrupti possimus eligendi neque porro ea quos aperiam adipisci, quod ipsam accusantium similique praesentium. Sequi natus rerum ea?</p>
                    </div>
                </div>
            </div>
        </div>
    )
}