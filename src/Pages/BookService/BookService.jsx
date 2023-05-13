import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const BookService = () => {
    const service = useLoaderData({})
    console.log(service)
    const { title, price, _id, img } = service;
    const { user } = useContext(AuthContext)


    const handleBookService = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = form.email.value;
        const booking = {
            customerName: name,
            img,
            email,
            date,
            service: title,
            price: price
        }
        console.log(booking);

        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)

        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.insertedId){
                alert('Service bookmarked!')
            }
        })
        
    }


    return (
        <div>
            <h2 className='text-3xl text-center text-orange-600'> {title}</h2>

            <form onSubmit={handleBookService}>
                <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Date</span>
                        </label>
                        <input type="date" defaultValue={user?.displayName} name='date' className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" placeholder="email" name='email' defaultValue={user?.email} className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Due Amount</span>
                        </label>
                        <input type="text" defaultValue={'$ ' + price} className="input input-bordered" />
                    </div>
                </div>
                <div className="mt-6 form-control">
                    <input value="Order Confirm" type='submit' className="btn btn-block" />
                </div>
            </form>
        </div>

    );
};

export default BookService;