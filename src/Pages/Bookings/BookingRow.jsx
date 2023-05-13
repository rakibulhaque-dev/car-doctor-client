import React from 'react';

const BookingRow = ({ booking }) => {
    const { img, service, price, title, customerName, date, email } = booking;

    return (
        <tr>
            <th>
                <label>
                    <input type="checkbox" className="checkbox" />
                </label>
            </th>
            <td>
                <div className="avatar">
                    <div className="w-24 h-24 rounded">
                        {img && <img src={img} />}
                    </div>
                </div>
            </td>
            <td>
                {title}
            </td>
            <td>{date}</td>
            <td>$ {price}</td>
            <th>
                <button className="btn btn-ghost btn-xs">details</button>
            </th>
        </tr>
    );
};

export default BookingRow;