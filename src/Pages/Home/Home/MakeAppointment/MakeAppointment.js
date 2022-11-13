import React from 'react';
import doctor from '../../../../assets/images/doctor.png'
import appointment from '../../../../assets/images/appointment.png'
import PrimaryButton from '../../../../Components/PrimaryButton/PrimaryButton';

const MakeAppointment = () => {
    return (
        <section className='mt-32'
            style={{
                background: `url(${appointment})`
            }}>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={doctor} alt='' className="-mt-32 hidden lg:block lg:w-1/2 rounded-lg shadow-2xl" />
                    <div>
                        <h4 className='text-lg text-primary font-bold'>Appointment</h4>
                        <h1 className="text-4xl text-white font-bold">Make an appointment Today</h1>
                        <p className="py-6 text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi distinctio sequi accusamus quas facere eius, amet itaque volupta`te fugit officiis sed recusandae labore hic! Consectetur iste, temporibus autem exercitationem rem nemo, recusandae incidunt nam aliquam suscipit saepe unde repellendus, nulla facilis? Quia alias qui, nobis est suscipit aliquam expedita eum.</p>
                        <PrimaryButton>Appointment</PrimaryButton>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;