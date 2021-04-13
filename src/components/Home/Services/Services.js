import React from 'react';
import Fluoride from '../../../images/fluoride.png';
import Cavity from '../../../images/cavity.png';
import Teeth from '../../../images/teeth.png';
import ServiceDetails from '../ServiceDetails/ServiceDetails';

const serviceData=[
    {
        name:'Fluoride Treatment',
        img:Fluoride
    },
    {
        name:'Cavity Filling',
        img:Cavity
    },
    {
        name:'Teeth Whitening',
        img:Teeth
    }
]

const Services = () => {
    return (
        <section className="services-container mt-5">
            <div className="text-center">
                <h5 style={{color:'#1CC7C1'}}>OUR SERVICES</h5>
                <h2 style={{color:'#3A4256'}}>Services We Provide</h2>
            </div>
            <div className="d-flex justify-content-center">
                <div className="w-75 row mt-5 pt-5">
                        {
                            serviceData.map(service=> <ServiceDetails service={service}></ServiceDetails>)
                        }
                </div>
           </div>
        </section>
    );
};

export default Services;