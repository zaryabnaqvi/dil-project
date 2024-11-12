import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Service from './Service';
import Spinner from '../../Shared/Spinner/Spinner';

const Services = () => {
    const [services, setServices] = useState([
        {
            name:"CSIT Department",
            description: "Computer Science and Information Technology (CSIT) is a department of the College of Arts, Sciences, and Humanities. It is the largest and most prestigious department in the College of Arts, Sciences, and Humanities.",
            img: "https://www.cs.columbia.edu/sites/default/files/styles/cs_hero_image/public/cs-hero-image_0.jpg?itok=j8v6o9_P",
        }
    ])


    
    useEffect(() => {
        // axios.get('https://immense-river-40491.herokuapp.com/services')
        // .then(res => setServices(res.data))
    }, [])

    return (
        <section id="services" className="services">
            <h4 className="miniTitle text-center">SERVICES</h4>
            <div className="text-center">
                <h5 className="text-center sectionTitle">PROVIDE AWESOME SERVICE</h5>
            </div>
            {services.length === 0 && <div className="spinner text-center"><Spinner/></div>}
            <div className="row mt-4 container mx-auto justify-content-center">
                {
                    services?.map((service, id) => <Service key={service._key + id} service={service}/>)
                }
            </div>
        </section>
    );
};

export default Services;