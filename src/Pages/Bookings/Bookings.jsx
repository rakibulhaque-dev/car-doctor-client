import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import BookingRow from './BookingRow';

const Bookings = () => {
    const { user } = useContext(AuthContext)
    const [bookings, setBookings] = useState([])
    console.log(bookings)
    const url = `http://localhost:5000/bookings?email=${user?.email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [])

    const handleDelete = id => {
        const proceed = confirm('Are you sure?')
        if (proceed) {
            fetch(`http://localhost:5000/bookings/${id}`, 
            {
                method: 'DELETE'
            }
            )
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Deleted Succesfully...')
                        const remaining = bookings.filter(booking=> booking._id !== id)
                        setBookings(remaining);
                    }
                })
        }
    }


    return (
        <div>
            <h2>Bookings: {bookings.length}</h2>


            <div className="w-full overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Image</th>
                            <th>Service</th>
                            <th>Date</th>
                            <th>Price</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        bookings.map(booking => <BookingRow
                        key={booking._id}
                        booking={booking}
                        handleDelete={handleDelete}
                        ></BookingRow>)
                    }

                    </tbody>
                    {/* foot */}
                

                </table>
            </div>
        </div>
    );
};

export default Bookings;