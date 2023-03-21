import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { getTickets, reset } from "../features/tickets/ticketSlice";
import { MdSubject } from 'react-icons/md';
import avatarImage from './img/avatar.png';
import { BackBtn } from '../components/BackBtn';
// CSS
import './css/tickets.css'

export const Tickets = () => {
    const { tickets, isLoading, isSuccess } = useSelector(state => state.tickets);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTickets())

        return () => {
            if(isSuccess) {
                dispatch(reset())
            }
        }
    }, [dispatch, isSuccess])

    return (
        <>
            <BackBtn url='/' />
            <div className="ticket-header">
                <ul>
                    <li><MdSubject /> Product</li>
                    <li><MdSubject /> Description</li>
                </ul>
            </div>
            <div className="tickets">
                {tickets.map((ticket) => (
                    <div className="item" key={ticket._id}>
                        <img src={avatarImage} alt="Avatar" />
                        <div className="content">
                            <span className="product">{ticket.product}</span>
                            <span className="subject">{ticket.description}</span>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}