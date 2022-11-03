import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/authProvider/AuthProvider';

const Checkout = () => {

    const { user } = useContext(AuthContext);

    console.log('check user email',user);
    const checkout = useLoaderData();
    const { title, price } = checkout;
    const handlePlaceOrder = event => {
        const form = event.target;
        const name = `${form.firstName.value} ${form.lastName.value}`;
        const phone = form.phone.value;
        const email = user?.email;
        
        
    }

    return (
        <div>
            <form onSubmit={handlePlaceOrder} className='p-24 bg-gray-200 rounded-lg'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                <input type="text" name='firstName' placeholder="First Name" className="input input-bordered w-full " />
                <input type="text" name='lastName' placeholder="Last Name" className="input input-bordered w-full " />
                <input type="text" name='phone' placeholder="Phone" className="input input-bordered w-full " />
                <input type="email" name='email'  defaultValue={user?.email} className="input input-bordered w-full " readOnly />
                </div>
                <textarea className="textarea textarea-bordered w-full my-5 h-96" placeholder="Write Your Message here ..."></textarea>
                <button className="btn bg-orange-600 w-full border-none text-xl font-semibold">Place Your Order</button>
           </form>
        </div>
    );
};

export default Checkout;