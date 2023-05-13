import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const { _id, title, img, price } = service;

    return (
        <div className="shadow-xl card w-96 bg-base-100">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="items-center text-center card-body">
                <h2 className="card-title">{title}</h2>
                <p className='text-xl font-bold text-orange-600'>Price: {price}</p>
                <div className="card-actions">
                    <Link to={`/book/${_id}`}>
                    <button className="btn btn-primary">Buy Now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;