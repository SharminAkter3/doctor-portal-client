import React from 'react';
import treatment from '../../../../assets/images/treatment.png'
import PrimaryButton from '../../../../Components/PrimaryButton/PrimaryButton';

const ServicesInfo = () => {
    return (
        <div className="card grid grid-cols-1 md:grid-cols-2 bg-base-100 my-10 p-10 w-full h-1/2 shadow-xl">
            <div>
                <figure><img className='lg:w-1/2' src={treatment} alt="Album" /></figure>
            </div>
            <div className="card-body">
                <h2 className="card-title">Exception Dental Care, On Your Terms</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut natus, praesentium labore doloremque consequatur perferendis iure asperiores quod dolor minima debitis sit dolore eligendi placeat repellat unde repellendus distinctio provident nobis, cumque totam quo enim quaerat reiciendis? Voluptate hic blanditiis odio, tenetur doloribus illo, numquam voluptatum, nulla et dolor dicta?</p>
                <div className="card-actions ">
                    <PrimaryButton>Get Started</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default ServicesInfo;