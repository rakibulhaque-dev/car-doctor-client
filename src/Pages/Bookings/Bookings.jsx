import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const Bookings = () => {
    const { user } = useContext(AuthContext)
    console.log(user)
    const [bookings, setBookings] = useState([])

    const url = `http://localhost:5000/bookings?email=${user.email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                // setBookings(data)
            })
    }, [])

    return (
        <div>
            <h2>Bookings</h2>
        </div>
    );
};

export default Bookings;