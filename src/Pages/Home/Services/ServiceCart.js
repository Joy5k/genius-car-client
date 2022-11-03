import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ServiceCart = ({ service }) => {
  const {_id, img, price, title } = service;
    return (
        <div data-aos="zoom-out" className="w-96 h-96 p-4 border card card-compact bg-base-100 shadow-xl">
        <figure><img className='rounded-lg' src={img} alt="Shoes" /></figure>
        <div className="relative card-body">
                <h2 className="card-title">{ title}</h2>
          <div className="absolute w-full bottom-0  card-actions justify-between">
                <p className='text-2xl text-orange-600 font-semibold'>Price: ${price}</p>
            <Link to={`/checkout/${_id}`}>
            <button className="btn bg-transparent border-none mr-2 text-orange-600"><FaArrowRight></FaArrowRight></button>
          
            </Link>
          </div>
        </div>
      </div>
    );
};
AOS.init();
export default ServiceCart;