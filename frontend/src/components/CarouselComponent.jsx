import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../../public/img1.png";
import img2 from "../../public/img2.png";
import img3 from "../../public/img3.png";
import Modal from './Modal';
import AppointmentForm from './AppointmentForm';

const images = [
    img1,
    img2,
    img3
];

const CarouselComponent = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div className="carousel-wrapper">
            <Carousel infiniteLoop useKeyboardArrows autoPlay>
                {images.map((img, index) => (
                    <div key={index} className="relative">
                        <img src={img} alt={`Slide ${index + 1}`} />
                        <button
                            onClick={openModal} // Open the modal on click
                            className='bg-black text-white rounded-full absolute bottom-3 left-[20%] sm:bottom-4 md:bottom-10 transform -translate-x-1/2 
                            px-2 py-1 sm:px-5 sm:py-2 md:px-6 md:py-2 lg:px-4 lg:py-2 text-xs sm:text-sm md:text-base lg:text-lg'>
                            Book an Appointment
                        </button>
                    </div>
                ))}
            </Carousel>

            {/* Modal */}
            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <AppointmentForm />
            </Modal>
        </div>
    );
};

export default CarouselComponent;
