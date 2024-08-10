import React from 'react';
import { X } from 'lucide-react';

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-gray-100 rounded-lg shadow-lg p-6 w-full max-w-md mx-auto">
                <button
                    onClick={onClose}
                    className="text-4xl text-end w-full flex justify-end text-gray-500  hover:text-gray-700"
                >
                     <X />
                </button>
                <h1 className='text-center text-3xl font-bold'>Book Your Appointment</h1>
                {children}
            </div>
        </div>
    );
};

export default Modal;
