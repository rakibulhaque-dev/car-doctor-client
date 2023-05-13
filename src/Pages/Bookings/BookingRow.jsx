import React from 'react';

const BookingRow = ({ booking, handleDelete, handleConfirm }) => {
    const { _id, img, service, price, date } = booking;

    return (
        <tr>
            <th>
                <button onClick={() => handleDelete(_id)} className="btn btn-sm btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
            <td>
                <div className="avatar">
                    <div className="w-24 h-24 rounded">
                        {img && <img src={img} />}
                    </div>
                </div>
            </td>
            <td>{service}</td>
            <td>{date}</td>
            <td>$ {price}</td>
            <th>
                <button
                    onClick={() => handleConfirm(_id)}
                    className="btn btn-ghost btn-xs"
                >Confirm</button>
            </th>
        </tr>
    );
};

export default BookingRow;