import React from 'react';
import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';



const About = () => {
    return (
        <div className="hero my-20">
        <div className="hero-content flex-col lg:flex-row">
                <div data-aos="fade-right" className='relative w-1/2'>
                <img src={person} alt="" className="w-4/5  max-w-sm rounded-lg shadow-2xl" />
                <img src={parts} alt="" className="absolute right-5 top-1/2 border-8 max-w-sm rounded-lg shadow-2xl" />
          </div>
                <div data-aos="fade-left" className='w-1/2'>
                    <p className=' text-2xl font-bold text-orange-600'>About Us</p>
                    <h1 className=" py-5 text-5xl font-bold">We are qualified <br />
                        & of experience <br />
                        in this field</h1>
                    <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <p className="py-6">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            <button className="btn border-none bg-orange-600">Get More Info</button>
          </div>
        </div>
      </div>
    );
};
AOS.init();
export default About;